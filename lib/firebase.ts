import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBM4yhE5dagKvvaVP5leD9GVW8fzL5jZSQ",
  authDomain: "sweet-cc2af.firebaseapp.com",
  projectId: "sweet-cc2af",
  storageBucket: "sweet-cc2af.appspot.com",
  messagingSenderId: "763839979443",
  appId: "1:763839979443:web:670e1b336916b2dfbb75c6",
  measurementId: "G-Y6030MK48Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);