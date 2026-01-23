import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYNDBM3UN4Zzo7fIUnHkCWIyiQl1S-mfo",
  authDomain: "react-app-479ca.firebaseapp.com",
  projectId: "react-app-479ca",
  storageBucket: "react-app-479ca.firebasestorage.app",
  messagingSenderId: "905834855130",
  appId: "1:905834855130:web:822a6b652ddf28812c03e3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
