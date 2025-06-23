// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'

const firebaseConfig = {

  apiKey: FIREBASE_API_KEY,

  authDomain: "edutracked.firebaseapp.com",

  projectId: "edutracked",

  storageBucket: "edutracked.firebasestorage.app",

  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,

  appId: FIREBASE_APP_ID,

  measurementId: "G-YV0SRCT36X"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);