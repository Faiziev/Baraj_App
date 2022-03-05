// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4o7JYWnzo8DeUAL2UGf5BvQjBGHh2ZUQ",
  authDomain: "baraj-app.firebaseapp.com",
  projectId: "baraj-app",
  storageBucket: "baraj-app.appspot.com",
  messagingSenderId: "1033045074810",
  appId: "1:1033045074810:web:d6ba316ffaf73c2b8fecc3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }