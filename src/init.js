import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyD6ucx0p_fgsgsNLgg4hhSFPzwtrwKslKg',
  authDomain: 'shopping-7789b.firebaseapp.com',
  projectId: 'shopping-7789b',
  storageBucket: 'shopping-7789b.appspot.com',
  messagingSenderId: '421171548968',
  appId: '1:421171548968:web:8c2840fb6179371a55b61d',
};

// Initialize Firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth()

export { db, auth };
