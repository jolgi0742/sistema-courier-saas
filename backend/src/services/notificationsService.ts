// notificationsService.ts - Servicio de notificaciones
import { pool } from '../config/database';
import { v4 as uuidv4 } from 'uuid';

interface Notification {
    id?: string;
    tenant_id: string;
    user_id: string;
    title: string;
    message: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    category?: 'package' | 'delivery' | 'payment' | 'system' | 'alert';
    link?: string;
    metadata?: any;
}

export class NotificationsService {
    // Obtener notificaciones del usuario
    static async getNotifications(userId: string, tenantId: string, limit: number = 50) {
        const { rows: notifications } = await pool.query(
            `SELECT * FROM notifications 
       WHERE user_id = $1 AND tenant_id = $2 
       ORDER BY created_at DESC 
       LIMIT $3`,
            [userId, tenantId, limit]
        );
        return notifications;
    }

    // Crear notificación
    static async createNotification(data: Notification) {
        const id = uuidv4();
        await pool.query(
            `INSERT INTO notifications 
       (id, tenant_id, user_id, title, message, type, category, link, metadata) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [
                id,
                data.tenant_id,
                data.user_id,
                data.title,
                data.message,
                data.type || 'info',
                data.category || 'system',
                data.link || null,
                data.metadata ? JSON.stringify(data.metadata) : null
            ]
        );

        const { rows: notification } = await pool.query(
            'SELECT * FROM notifications WHERE id = $1',
            [id]
        );
        return notification[0];
    }

    // Marcar como leída
    static async markAsRead(notificationId: string, userId: string) {
        await pool.query(
            `UPDATE notifications 
       SET is_read = TRUE, read_at = CURRENT_TIMESTAMP 
       WHERE id = $1 AND user_id = $2`,
            [notificationId, userId]
        );
        return { success: true };
    }

    // Marcar todas como leídas
    static async markAllAsRead(userId: string, tenantId: string) {
        await pool.query(
            `UPDATE notifications 
       SET is_read = TRUE, read_at = CURRENT_TIMESTAMP 
       WHERE user_id = $1 AND tenant_id = $2 AND is_read = FALSE`,
            [userId, tenantId]
        );
        return { success: true };
    }

    // Obtener contador de no leídas
    static async getUnreadCount(userId: string, tenantId: string) {
        const { rows: result } = await pool.query(
            `SELECT COUNT(*) as count 
       FROM notifications 
       WHERE user_id = $1 AND tenant_id = $2 AND is_read = FALSE`,
            [userId, tenantId]
        );
        return result[0].count;
    }

    // Eliminar notificación
    static async deleteNotification(notificationId: string, userId: string) {
        await pool.query(
            'DELETE FROM notifications WHERE id = $1 AND user_id = $2',
            [notificationId, userId]
        );
        return { success: true };
    }

    // Crear notificación para evento de paquete
    static async notifyPackageEvent(
        tenantId: string,
        userId: string,
        packageId: string,
        trackingNumber: string,
        event: string
    ) {
        const titles: Record<string, string> = {
            created: 'Nuevo paquete creado',
            in_transit: 'Paquete en tránsito',
            delivered: 'Paquete entregado',
            delayed: 'Retraso en entrega'
        };

        const messages: Record<string, string> = {
            created: `Se ha creado el paquete ${trackingNumber}`,
            in_transit: `El paquete ${trackingNumber} está en tránsito`,
            delivered: `El paquete ${trackingNumber} ha sido entregado`,
            delayed: `El paquete ${trackingNumber} presenta un retraso`
        };

        return this.createNotification({
            tenant_id: tenantId,
            user_id: userId,
            title: titles[event] || 'Actualización de paquete',
            message: messages[event] || `Actualización del paquete ${trackingNumber}`,
            type: event === 'delivered' $1 'success' : event === 'delayed' $2 'warning' : 'info',
            category: 'package',
            link: `/packages/${packageId}`
        });
    }
}
