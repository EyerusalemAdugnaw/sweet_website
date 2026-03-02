import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";

/*
--------------------------------------------------
Firebase Configuration
--------------------------------------------------
*/

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

/*
--------------------------------------------------
Initialize App (Safe for Build + Browser)
--------------------------------------------------
*/

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

/*
--------------------------------------------------
Firestore (Offline Cache Enabled)
--------------------------------------------------
*/

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

/*
--------------------------------------------------
Auth
--------------------------------------------------
*/

export const auth = getAuth(app);