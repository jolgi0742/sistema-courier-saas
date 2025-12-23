// WhiteLabelSettings.tsx - Página de configuración White Label
import React, { useEffect, useState } from 'react';
import { useTenant } from '../../contexts/TenantContext';
import {
    Globe,
    Plus,
    Trash2,
    CheckCircle,
    AlertCircle,
    Clock,
    ExternalLink,
    RefreshCw,
    Copy,
    Star
} from 'lucide-react';

interface Domain {
    id: string;
    domain: string;
    domain_type: 'subdomain' | 'custom';
    is_primary: boolean;
    ssl_status: 'pending' | 'provisioning' | 'active' | 'failed';
    verified_at: string | null;
}

interface DNSInstructions {
    type: string;
    name: string;
    value: string;
    instructions: string;
}

const WhiteLabelSettings: React.FC = () => {
    const { tenant } = useTenant();
    const [domains, setDomains] = useState<Domain[]>([]);
    const [loading, setLoading] = useState(true);
    const [newDomain, setNewDomain] = useState('');
    const [adding, setAdding] = useState(false);
    const [instructions, setInstructions] = useState<DNSInstructions | null>(null);
    const [verifying, setVerifying] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const isEnterprise = tenant?.plan?.id === 'enterprise';
    const primaryColor = tenant?.branding?.primary_color || '#3b82f6';

    useEffect(() => {
        fetchDomains();
    }, []);

    const fetchDomains = async () => {
        try {
            const response = await fetch('/api/domains', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            const data = await response.json();
            setDomains(data);
        } catch (error) {
            console.error('Error fetching domains:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddDomain = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newDomain.trim()) return;

        setAdding(true);
        setError('');

        try {
            const response = await fetch('/api/domains', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ domain: newDomain })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error agregando dominio');
            }

            setDomains([...domains, data.domain]);
            setInstructions(data.dns_instructions);
            setNewDomain('');
            setSuccess('Dominio agregado. Configure el DNS siguiendo las instrucciones.');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setAdding(false);
        }
    };

    const handleVerify = async (domainId: string) => {
        setVerifying(domainId);
        setError('');

        try {
            const response = await fetch(`/api/domains/${domainId}/verify`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });

            const data = await response.json();

            if (data.verified) {
                setSuccess('DNS verificado. El SSL se está configurando.');
                fetchDomains();
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Error verificando DNS');
        } finally {
            setVerifying(null);
        }
    };

    const handleSetPrimary = async (domainId: string) => {
        try {
            await fetch(`/api/domains/${domainId}/set-primary`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setSuccess('Dominio establecido como principal');
            fetchDomains();
        } catch (err) {
            setError('Error estableciendo dominio principal');
        }
    };

    const handleDelete = async (domainId: string) => {
        if (!confirm('¿Eliminar este dominio?')) return;

        try {
            await fetch(`/api/domains/${domainId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setDomains(domains.filter(d => d.id !== domainId));
            setSuccess('Dominio eliminado');
        } catch (err) {
            setError('Error eliminando dominio');
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setSuccess('Copiado al portapapeles');
        setTimeout(() => setSuccess(''), 2000);
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'active':
                return <span className="badge success"><CheckCircle size={14} /> Activo</span>;
            case 'provisioning':
                return <span className="badge warning"><Clock size={14} /> Configurando SSL</span>;
            case 'pending':
                return <span className="badge pending"><AlertCircle size={14} /> Pendiente verificación</span>;
            case 'failed':
                return <span className="badge danger"><AlertCircle size={14} /> Error</span>;
            default:
                return null;
        }
    };

    if (!isEnterprise) {
        return (
            <div className="white-label-settings">
                <div className="upgrade-notice">
                    <Globe size={48} />
                    <h2>White Label disponible en Enterprise</h2>
                    <p>Actualiza a Enterprise para configurar dominios personalizados, emails con tu marca y más.</p>
                    <a href="/account/billing" className="btn btn-primary">Ver planes</a>
                </div>
                <style>{getStyles(primaryColor)}</style>
            </div>
        );
    }

    return (
        <div className="white-label-settings">
            <header className="page-header">
                <h1>Configuración White Label</h1>
                <p>Personaliza tu dominio y branding para tus clientes</p>
            </header>

            {error && <div className="alert error">{error}</div>}
            {success && <div className="alert success">{success}</div>}

            {/* Dominios */}
            <div className="card">
                <div className="card-header">
                    <h3><Globe size={20} /> Dominios</h3>
                </div>
                <div className="card-content">
                    {/* Lista de dominios */}
                    <div className="domains-list">
                        {domains.map((domain) => (
                            <div key={domain.id} className="domain-row">
                                <div className="domain-info">
                                    <div className="domain-name">
                                        {domain.is_primary && <Star size={16} className="primary-star" />}
                                        {domain.domain}
                                        {domain.domain_type === 'subdomain' &&
                                            <span className="subdomain-badge">Subdominio</span>
                                        }
                                    </div>
                                    {getStatusBadge(domain.ssl_status)}
                                </div>
                                <div className="domain-actions">
                                    {domain.ssl_status === 'pending' && (
                                        <button
                                            onClick={() => handleVerify(domain.id)}
                                            disabled={verifying === domain.id}
                                            className="btn-action"
                                        >
                                            {verifying === domain.id ? <RefreshCw size={16} className="spin" /> : 'Verificar DNS'}
                                        </button>
                                    )}
                                    {domain.ssl_status === 'active' && !domain.is_primary && (
                                        <button onClick={() => handleSetPrimary(domain.id)} className="btn-action">
                                            <Star size={16} /> Hacer principal
                                        </button>
                                    )}
                                    {domain.domain_type === 'custom' && (
                                        <button onClick={() => handleDelete(domain.id)} className="btn-delete">
                                            <Trash2 size={16} />
                                        </button>
                                    )}
                                    <a
                                        href={`https://${domain.domain}`}
                                        target="_blank"
                                        className="btn-action"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Agregar dominio */}
                    <form onSubmit={handleAddDomain} className="add-domain-form">
                        <input
                            type="text"
                            placeholder="miempresa.com"
                            value={newDomain}
                            onChange={(e) => setNewDomain(e.target.value)}
                        />
                        <button type="submit" disabled={adding} className="btn btn-primary">
                            <Plus size={18} />
                            {adding ? 'Agregando...' : 'Agregar Dominio'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Instrucciones DNS */}
            {instructions && (
                <div className="card instructions-card">
                    <div className="card-header">
                        <h3>Configuración DNS</h3>
                    </div>
                    <div className="card-content">
                        <p className="instructions-intro">
                            Configure en su proveedor de dominio:
                        </p>
                        <div className="dns-record">
                            <div className="dns-field">
                                <label>Tipo</label>
                                <span>{instructions.type}</span>
                            </div>
                            <div className="dns-field">
                                <label>Nombre</label>
                                <span>{instructions.name}</span>
                                <button onClick={() => copyToClipboard(instructions.name)} className="copy-btn">
                                    <Copy size={14} />
                                </button>
                            </div>
                            <div className="dns-field wide">
                                <label>Valor</label>
                                <span>{instructions.value}</span>
                                <button onClick={() => copyToClipboard(instructions.value)} className="copy-btn">
                                    <Copy size={14} />
                                </button>
                            </div>
                        </div>
                        <p className="dns-note">
                            La propagación DNS puede tardar hasta 24 horas. Una vez configurado, haga clic en "Verificar DNS".
                        </p>
                    </div>
                </div>
            )}

            <style>{getStyles(primaryColor)}</style>
        </div>
    );
};

const getStyles = (primaryColor: string) => `
  .white-label-settings {
    padding: 32px;
    max-width: 900px;
    margin: 0 auto;
    font-family: system-ui, sans-serif;
  }

  .page-header {
    margin-bottom: 32px;
  }

  .page-header h1 {
    font-size: 28px;
    font-weight: 700;
    color: #1f2937;
  }

  .page-header p {
    color: #6b7280;
    margin-top: 4px;
  }

  .alert {
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 14px;
  }

  .alert.error {
    background: #fef2f2;
    color: #dc2626;
  }

  .alert.success {
    background: #f0fdf4;
    color: #16a34a;
  }

  .card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    margin-bottom: 24px;
  }

  .card-header {
    padding: 20px 24px;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-header h3 {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .card-content {
    padding: 24px;
  }

  .domains-list {
    margin-bottom: 24px;
  }

  .domain-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    margin-bottom: 12px;
  }

  .domain-info {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .domain-name {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .primary-star {
    color: #f59e0b;
  }

  .subdomain-badge {
    font-size: 11px;
    background: #f3f4f6;
    padding: 2px 8px;
    border-radius: 4px;
    color: #6b7280;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 6px;
    font-weight: 500;
  }

  .badge.success {
    background: #dcfce7;
    color: #16a34a;
  }

  .badge.warning {
    background: #fef3c7;
    color: #d97706;
  }

  .badge.pending {
    background: #f3f4f6;
    color: #6b7280;
  }

  .badge.danger {
    background: #fef2f2;
    color: #dc2626;
  }

  .domain-actions {
    display: flex;
    gap: 8px;
  }

  .btn-action {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: #f3f4f6;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    text-decoration: none;
    color: #374151;
    transition: background 0.2s;
  }

  .btn-action:hover {
    background: #e5e7eb;
  }

  .btn-delete {
    background: none;
    border: none;
    color: #dc2626;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
  }

  .btn-delete:hover {
    background: #fef2f2;
  }

  .spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .add-domain-form {
    display: flex;
    gap: 12px;
  }

  .add-domain-form input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 15px;
  }

  .add-domain-form input:focus {
    outline: none;
    border-color: ${primaryColor};
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .btn-primary {
    background: ${primaryColor};
    color: white;
  }

  .btn-primary:hover {
    opacity: 0.9;
  }

  .btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .instructions-card .instructions-intro {
    margin-bottom: 16px;
    color: #6b7280;
  }

  .dns-record {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    background: #f9fafb;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 16px;
  }

  .dns-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .dns-field.wide {
    flex: 1;
    min-width: 200px;
  }

  .dns-field label {
    font-size: 12px;
    color: #6b7280;
    text-transform: uppercase;
  }

  .dns-field span {
    font-family: monospace;
    background: white;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
  }

  .copy-btn {
    background: none;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 4px;
    margin-left: 8px;
  }

  .copy-btn:hover {
    color: ${primaryColor};
  }

  .dns-note {
    font-size: 13px;
    color: #6b7280;
    font-style: italic;
  }

  .upgrade-notice {
    text-align: center;
    padding: 60px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  .upgrade-notice svg {
    color: #9ca3af;
    margin-bottom: 20px;
  }

  .upgrade-notice h2 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .upgrade-notice p {
    color: #6b7280;
    margin-bottom: 24px;
  }
`;

export default WhiteLabelSettings;
