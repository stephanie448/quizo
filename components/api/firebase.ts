// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Pjv0DUl7cyu-Nz3yaeJ6lLnlQfqH3qk",
  authDomain: "quizo-6157e.firebaseapp.com",
  projectId: "quizo-6157e",
  storageBucket: "quizo-6157e.appspot.com",
  messagingSenderId: "342365351632",
  appId: "1:342365351632:web:52766d4df77b8f9a2f78d5",
  measurementId: "G-103X4J4VFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
