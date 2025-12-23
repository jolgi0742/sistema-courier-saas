// firebase.ts - Configuración de Firebase Admin SDK
import * as admin from 'firebase-admin';

// Verificar si ya está inicializado
if (!admin.apps.length) {
    // En producción usar variables de entorno
    // En desarrollo puede usar el archivo JSON
    const useEnvCredentials = process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL;

    if (useEnvCredentials) {
        // Producción: usar variables de entorno
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // La private key viene con \n escapados, hay que convertirlos
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            })
        });
        console.log('✅ Firebase Admin inicializado con variables de entorno');
    } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        // Desarrollo: usar archivo JSON
        admin.initializeApp({
            credential: admin.credential.applicationDefault()
        });
        console.log('✅ Firebase Admin inicializado con archivo de credenciales');
    } else {
        console.warn('⚠️ Firebase Admin no configurado - autenticación deshabilitada');
    }
}

// Exportar servicios de Firebase
export const firebaseAuth = admin.apps.length ? admin.auth() : null;
export const firebaseDb = admin.apps.length ? admin.firestore() : null;

export default admin;
