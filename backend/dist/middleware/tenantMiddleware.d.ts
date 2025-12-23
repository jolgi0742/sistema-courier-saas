import { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            tenant?: {
                id: string;
                name: string;
                subdomain: string;
                status: string;
                plan_id: string;
                trial_ends_at: Date | null;
            };
            branding?: {
                logo_url: string | null;
                primary_color: string;
                secondary_color: string;
                company_name: string;
                contact_email: string | null;
            } | null;
        }
    }
}
/**
 * Middleware para resolver y validar el tenant de cada request
 */
export declare const tenantMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
/**
 * Middleware para rutas que NO requieren tenant (ej: landing, registro)
 */
export declare const optionalTenantMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<void>;
/**
 * Middleware para Super Admin (sin tenant específico)
 */
export declare const superAdminMiddleware: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default tenantMiddleware;
//# sourceMappingURL=tenantMiddleware.d.ts.map