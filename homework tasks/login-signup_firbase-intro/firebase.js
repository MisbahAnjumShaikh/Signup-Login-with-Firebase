import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD9CNhO6dFUEqTVPxFoCqDT5299WpFvesI",
  authDomain: "signup-login-b2b42.firebaseapp.com",
  projectId: "signup-login-b2b42",
  storageBucket: "signup-login-b2b42.firebasestorage.app",
  messagingSenderId: "352100989123",
  appId: "1:352100989123:web:31ca658d2f426ab6d00a76",
  measurementId: "G-93TCKH2E47",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup, 
  provider
};
