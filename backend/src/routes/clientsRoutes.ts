// clientsRoutes.ts - Rutas API de clientes multi-tenant
import { Router, Request, Response } from 'express';
import { ClientsService } from '../services/clientsService';
import { tenantMiddleware } from '../middleware/tenantMiddleware';

const router = Router();

router.use(tenantMiddleware);

/**
 * GET /api/clients
 * Listar clientes
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { status, search, page = 1, limit = 20 } = req.query;

    const { clients, total } = await ClientsService.getAll(tenantId, {
      status: status as string,
      search: search as string,
      limit: Number(limit),
      offset: (Number(page) - 1) * Number(limit)
    });

    res.json({
      clients,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error listando clientes:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * GET /api/clients/stats
 * Estadísticas de clientes
 */
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const stats = await ClientsService.getStats(tenantId);
    res.json(stats);
  } catch (error) {
    console.error('Error obteniendo stats:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * GET /api/clients/:id
 * Obtener cliente por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { id } = req.params;

    const client = await ClientsService.getById(id, tenantId);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json(client);
  } catch (error) {
    console.error('Error obteniendo cliente:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * GET /api/clients/:id/packages
 * Obtener paquetes del cliente
 */
router.get('/:id/packages', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { id } = req.params;
    const { limit = 50 } = req.query;

    const client = await ClientsService.getById(id, tenantId);
    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    const packages = await ClientsService.getPackages(id, tenantId, Number(limit));

    res.json(packages);
  } catch (error) {
    console.error('Error obteniendo paquetes:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * POST /api/clients
 * Crear nuevo cliente
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { name, email, phone, company_name, address, city, country, tax_id, credit_limit } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ 
        error: 'Campos requeridos: name, email, phone' 
      });
    }

    // Verificar email único
    const existing = await ClientsService.getByEmail(email, tenantId);
    if (existing) {
      return res.status(400).json({ error: 'Ya existe un cliente con este email' });
    }

    const client = await ClientsService.create({
      tenant_id: tenantId,
      name,
      email,
      phone,
      company_name,
      address,
      city,
      country,
      tax_id,
      credit_limit
    });

    res.status(201).json(client);
  } catch (error) {
    console.error('Error creando cliente:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * PUT /api/clients/:id
 * Actualizar cliente
 */
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { id } = req.params;

    const client = await ClientsService.update(id, tenantId, req.body);

    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json(client);
  } catch (error) {
    console.error('Error actualizando cliente:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * POST /api/clients/:id/credit
 * Ajustar crédito del cliente
 */
router.post('/:id/credit', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { id } = req.params;
    const { amount, description } = req.body;

    if (amount === undefined || amount === 0) {
      return res.status(400).json({ error: 'Monto requerido' });
    }

    const client = await ClientsService.getById(id, tenantId);
    if (!client) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    await ClientsService.updateCreditBalance(id, tenantId, amount);

    res.json({ 
      message: 'Crédito actualizado',
      amount,
      new_balance: client.credit_balance + amount
    });
  } catch (error) {
    console.error('Error ajustando crédito:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

/**
 * DELETE /api/clients/:id
 * Eliminar/desactivar cliente
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const tenantId = req.tenant!.id;
    const { id } = req.params;

    const deleted = await ClientsService.delete(id, tenantId);

    if (!deleted) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }

    res.json({ message: 'Cliente eliminado/desactivado' });
  } catch (error) {
    console.error('Error eliminando cliente:', error);
    res.status(500).json({ error: 'Error interno' });
  }
});

export default router;
