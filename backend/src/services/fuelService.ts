// fuelService.ts - Servicio para control de combustible
import pool from '../config/database';
import { v4 as uuidv4 } from 'uuid';

export interface FuelRecord {
    id: string;
    tenant_id: string;
    courier_id: string | null;
    vehicle_id: string | null;
    liters: number;
    cost: number;
    price_per_liter: number | null;
    odometer_reading: number | null;
    previous_odometer: number | null;
    distance_traveled: number | null;
    efficiency: number | null;
    station: string | null;
    receipt_url: string | null;
    notes: string | null;
    created_at: string;
}

export interface FuelRecordWithCourier extends FuelRecord {
    courier_name: string | null;
}

export class FuelService {
    /**
     * Obtener todos los registros de combustible
     */
    static async getAll(tenantId: string, filters?: {
        courierId?: string;
        startDate?: string;
        endDate?: string;
    }): Promise<FuelRecordWithCourier[]> {
        let query = `
            SELECT 
                f.*,
                c.name as courier_name
            FROM fuel_records f
            LEFT JOIN couriers c ON f.courier_id = c.id
            WHERE f.tenant_id = ?
        `;
        const params: any[] = [tenantId];

        if (filters?.courierId) {
            query += ' AND f.courier_id = ?';
            params.push(filters.courierId);
        }

        if (filters?.startDate) {
            query += ' AND f.created_at >= ?';
            params.push(filters.startDate);
        }

        if (filters?.endDate) {
            query += ' AND f.created_at <= ?';
            params.push(filters.endDate);
        }

        query += ' ORDER BY f.created_at DESC';

        const [rows] = await pool.execute(query, params);
        return rows as FuelRecordWithCourier[];
    }

    /**
     * Obtener registro por ID
     */
    static async getById(id: string, tenantId: string): Promise<FuelRecordWithCourier | null> {
        const [rows] = await pool.execute(
            `SELECT 
                f.*,
                c.name as courier_name
            FROM fuel_records f
            LEFT JOIN couriers c ON f.courier_id = c.id
            WHERE f.id = ? AND f.tenant_id = ?`,
            [id, tenantId]
        );
        const records = rows as FuelRecordWithCourier[];
        return records.length > 0 ? records[0] : null;
    }

    /**
     * Obtener registros por courier
     */
    static async getByCourier(courierId: string, tenantId: string): Promise<FuelRecord[]> {
        const [rows] = await pool.execute(
            'SELECT * FROM fuel_records WHERE courier_id = ? AND tenant_id = ? ORDER BY created_at DESC',
            [courierId, tenantId]
        );
        return rows as FuelRecord[];
    }

    /**
     * Calcular eficiencia basado en odómetro anterior
     */
    private static async calculateEfficiency(
        courierId: string | null,
        currentOdometer: number,
        liters: number,
        tenantId: string
    ) {
        const result = {
            previousOdometer: null as number | null,
            distanceTraveled: null as number | null,
            efficiency: null as number | null
        };

        if (!courierId || !currentOdometer) {
            return result;
        }

        // Obtener último registro del courier
        const [rows] = await pool.execute(
            `SELECT odometer_reading 
             FROM fuel_records 
             WHERE courier_id = ? AND tenant_id = ? AND odometer_reading IS NOT NULL
             ORDER BY created_at DESC 
             LIMIT 1`,
            [courierId, tenantId]
        );

        const records = rows as any[];
        if (records.length === 0) {
            return result;
        }

        const previousOdometer = records[0].odometer_reading;
        const distanceTraveled = currentOdometer - previousOdometer;
        const efficiency = distanceTraveled > 0 ? distanceTraveled / liters : null;

        result.previousOdometer = previousOdometer;
        result.distanceTraveled = distanceTraveled;
        result.efficiency = efficiency;

        return result;
    }

    /**
     * Crear nuevo registro
     */
    static async create(data: Omit<FuelRecord, 'id' | 'created_at' | 'previous_odometer' | 'distance_traveled' | 'efficiency'>, tenantId: string): Promise<FuelRecord> {
        const id = uuidv4();

        // Calcular precio por litro si no se proporciona
        const pricePerLiter = data.price_per_liter || (data.cost / data.liters);

        // Calcular eficiencia si hay odómetro
        let efficiencyData: { previousOdometer: number | null; distanceTraveled: number | null; efficiency: number | null } = {
            previousOdometer: null,
            distanceTraveled: null,
            efficiency: null
        };
        if (data.odometer_reading && data.courier_id) {
            efficiencyData = await this.calculateEfficiency(
                data.courier_id,
                data.odometer_reading,
                data.liters,
                tenantId
            );
        }

        await pool.execute(
            `INSERT INTO fuel_records (
                id, tenant_id, courier_id, vehicle_id, liters, cost, price_per_liter,
                odometer_reading, previous_odometer, distance_traveled, efficiency,
                station, receipt_url, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                id,
                tenantId,
                data.courier_id || null,
                data.vehicle_id || null,
                data.liters,
                data.cost,
                pricePerLiter,
                data.odometer_reading || null,
                efficiencyData.previousOdometer,
                efficiencyData.distanceTraveled,
                efficiencyData.efficiency,
                data.station || null,
                data.receipt_url || null,
                data.notes || null
            ]
        );

        return this.getById(id, tenantId) as Promise<FuelRecord>;
    }

    /**
     * Eliminar registro
     */
    static async delete(id: string, tenantId: string): Promise<boolean> {
        const [result] = await pool.execute(
            'DELETE FROM fuel_records WHERE id = ? AND tenant_id = ?',
            [id, tenantId]
        );
        return (result as any).affectedRows > 0;
    }

    /**
     * Obtener estadísticas de combustible
     */
    static async getStats(tenantId: string, period?: { startDate?: string; endDate?: string }): Promise<{
        totalCost: number;
        totalLiters: number;
        averageEfficiency: number;
        recordCount: number;
    }> {
        let query = `
            SELECT 
                COALESCE(SUM(cost), 0) as totalCost,
                COALESCE(SUM(liters), 0) as totalLiters,
                COALESCE(AVG(efficiency), 0) as averageEfficiency,
                COUNT(*) as recordCount
            FROM fuel_records 
            WHERE tenant_id = ?
        `;
        const params: any[] = [tenantId];

        if (period?.startDate) {
            query += ' AND created_at >= ?';
            params.push(period.startDate);
        }

        if (period?.endDate) {
            query += ' AND created_at <= ?';
            params.push(period.endDate);
        }

        const [rows] = await pool.execute(query, params);
        const stats = (rows as any[])[0];

        return {
            totalCost: parseFloat(stats.totalCost) || 0,
            totalLiters: parseFloat(stats.totalLiters) || 0,
            averageEfficiency: parseFloat(stats.averageEfficiency) || 0,
            recordCount: stats.recordCount || 0
        };
    }
}

export default FuelService;
