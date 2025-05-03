import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const{VITE_API_KEY,VITE_AUTH_DOMAIN,VITE_PROJECT_ID,VITE_STOREGE_BUKET,VITE_MESSAGIMG_SENDER,VITE_APP_ID}=import.meta.env
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STOREGE_BUKET,
  messagingSenderId: VITE_MESSAGIMG_SENDER,
  appId: VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };