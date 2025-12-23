// useAuth.ts - Hook de autenticación con Firebase
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import {
    User,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    updateProfile
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, displayName?: string) => Promise<void>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Escuchar cambios en el estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Login con email y contraseña
    const login = async (email: string, password: string): Promise<void> => {
        try {
            setError(null);
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            const errorMessage = getFirebaseErrorMessage(err.code);
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Registro de nuevo usuario
    const register = async (email: string, password: string, displayName?: string): Promise<void> => {
        try {
            setError(null);
            setLoading(true);
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            if (displayName) {
                await updateProfile(user, { displayName });
            }
        } catch (err: any) {
            const errorMessage = getFirebaseErrorMessage(err.code);
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Cerrar sesión
    const logout = async (): Promise<void> => {
        try {
            setError(null);
            await signOut(auth);
        } catch (err: any) {
            setError('Error al cerrar sesión');
            throw err;
        }
    };

    // Restablecer contraseña
    const resetPassword = async (email: string): Promise<void> => {
        try {
            setError(null);
            await sendPasswordResetEmail(auth, email);
        } catch (err: any) {
            const errorMessage = getFirebaseErrorMessage(err.code);
            setError(errorMessage);
            throw new Error(errorMessage);
        }
    };

    // Limpiar error
    const clearError = () => setError(null);

    const value: AuthContextType = {
        user,
        loading,
        error,
        login,
        register,
        logout,
        resetPassword,
        clearError
    };

    return (
        <AuthContext.Provider value= { value } >
        { children }
        </AuthContext.Provider>
    );
};

// Hook para usar el contexto de auth
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};

// Mapear códigos de error de Firebase a mensajes en español
function getFirebaseErrorMessage(code: string): string {
    const errorMessages: Record<string, string> = {
        'auth/invalid-email': 'El correo electrónico no es válido',
        'auth/user-disabled': 'Esta cuenta ha sido deshabilitada',
        'auth/user-not-found': 'No existe una cuenta con este correo',
        'auth/wrong-password': 'Contraseña incorrecta',
        'auth/invalid-credential': 'Credenciales inválidas',
        'auth/email-already-in-use': 'Este correo ya está registrado',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres',
        'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde',
        'auth/network-request-failed': 'Error de conexión. Verifica tu internet'
    };

    return errorMessages[code] || 'Error de autenticación';
}

export default useAuth;
