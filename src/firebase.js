// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8Nat_mSGun31XsmX6DV9KGRIbUBOdzMw",
  authDomain: "dogsite-1cdef.firebaseapp.com",
  projectId: "dogsite-1cdef",
  storageBucket: "dogsite-1cdef.firebasestorage.app",
  messagingSenderId: "276698261125",
  appId: "1:276698261125:web:4dad449792fb067f5aebec"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
