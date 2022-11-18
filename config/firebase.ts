// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS-_cqCf-e3DptwCtLPO5ieDHCPDON6JA",
  authDomain: "hospdir-330307.firebaseapp.com",
  projectId: "hospdir-330307",
  storageBucket: "hospdir-330307.appspot.com",
  messagingSenderId: "586655357787",
  appId: "1:586655357787:web:44e7510d98f9c6734f587e",
  measurementId: "G-QEJBR58S2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
