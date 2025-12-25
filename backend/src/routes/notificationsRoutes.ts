// notificationsRoutes.ts - Rutas de notificaciones
import { Router } from 'express';
import { NotificationsService } from '../services/notificationsService';

const router = Router();

// Obtener notificaciones del usuario
router.get('/', async (req, res) => {
    try {
        const userId = 'admin-user'; // TODO: Obtener del token JWT
        const tenantId = req.headers['x-tenant-id'] as string;
        const limit = parseInt(req.query.limit as string) || 50;

        const notifications = await NotificationsService.getNotifications(userId, tenantId, limit);
        res.json(notifications);
    } catch (error) {
        console.error('Error getting notifications:', error);
        res.status(500).json({ error: 'Error al obtener notificaciones' });
    }
});

// Obtener contador de no leídas
router.get('/unread-count', async (req, res) => {
    try {
        const userId = 'admin-user'; // TODO: Obtener del token JWT
        const tenantId = req.headers['x-tenant-id'] as string;

        const count = await NotificationsService.getUnreadCount(userId, tenantId);
        res.json({ count });
    } catch (error) {
        console.error('Error getting unread count:', error);
        res.status(500).json({ error: 'Error al obtener contador' });
    }
});

// Marcar como leída
router.patch('/:id/read', async (req, res) => {
    try {
        const userId = 'admin-user'; // TODO: Obtener del token JWT
        const { id } = req.params;

        await NotificationsService.markAsRead(id, userId);
        res.json({ success: true });
    } catch (error) {
        console.error('Error marking as read:', error);
        res.status(500).json({ error: 'Error al marcar como leída' });
    }
});

// Marcar todas como leídas
router.patch('/mark-all-read', async (req, res) => {
    try {
        const userId = 'admin-user'; // TODO: Obtener del token JWT
        const tenantId = req.headers['x-tenant-id'] as string;

        await NotificationsService.markAllAsRead(userId, tenantId);
        res.json({ success: true });
    } catch (error) {
        console.error('Error marking all as read:', error);
        res.status(500).json({ error: 'Error al marcar todas como leídas' });
    }
});

// Eliminar notificación
router.delete('/:id', async (req, res) => {
    try {
        const userId = 'admin-user'; // TODO: Obtener del token JWT
        const { id } = req.params;

        await NotificationsService.deleteNotification(id, userId);
        res.json({ success: true });
    } catch (error) {
        console.error('Error deleting notification:', error);
        res.status(500).json({ error: 'Error al eliminar notificación' });
    }
});

// Crear notificación (solo admin)
router.post('/', async (req, res) => {
    try {
        const notification = await NotificationsService.createNotification(req.body);
        res.status(201).json(notification);
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ error: 'Error al crear notificación' });
    }
});

export default router;
