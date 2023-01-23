import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "react-crud-12814.firebaseapp.com",
  projectId: "react-crud-12814",
  storageBucket: "react-crud-12814.appspot.com",
  messagingSenderId: "260712512414",
  appId: "1:260712512414:web:9f6b66aabd5533a014b48f",
  measurementId: "G-3KVP8QVLQ8"
};

const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);