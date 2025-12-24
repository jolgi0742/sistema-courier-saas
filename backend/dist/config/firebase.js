"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseDb = exports.firebaseAuth = void 0;
// firebase.ts - Configuración de Firebase Admin SDK
const admin = __importStar(require("firebase-admin"));
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
    }
    else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
        // Desarrollo: usar archivo JSON
        admin.initializeApp({
            credential: admin.credential.applicationDefault()
        });
        console.log('✅ Firebase Admin inicializado con archivo de credenciales');
    }
    else {
        console.warn('⚠️ Firebase Admin no configurado - autenticación deshabilitada');
    }
}
// Exportar servicios de Firebase
exports.firebaseAuth = admin.apps.length ? admin.auth() : null;
exports.firebaseDb = admin.apps.length ? admin.firestore() : null;
exports.default = admin;
//# sourceMappingURL=firebase.js.map