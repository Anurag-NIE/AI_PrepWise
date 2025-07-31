// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwPNid43YhfhdlIH_Rum-tQmkO_Ho_cyg",
  authDomain: "prepwise-9376e.firebaseapp.com",
  projectId: "prepwise-9376e",
  storageBucket: "prepwise-9376e.firebasestorage.app",
  messagingSenderId: "604491628473",
  appId: "1:604491628473:web:95dbe72aee5e4e0eedc068",
  measurementId: "G-YQMQTSFD86",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
