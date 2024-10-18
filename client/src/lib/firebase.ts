// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUZIztu4esOpYaiopoQQFmzrkTsO_OG4c",
  authDomain: "supergear-d96b0.firebaseapp.com",
  projectId: "supergear-d96b0",
  storageBucket: "supergear-d96b0.appspot.com",
  messagingSenderId: "780852715609",
  appId: "1:780852715609:web:8474c00a2947ee15171148",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
