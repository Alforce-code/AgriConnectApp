// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiDie5wEmLhUfk_S5P4vYY4qdCoi68Vi8",
  authDomain: "agriconnect-eafc2.firebaseapp.com",
  projectId: "agriconnect-eafc2",
  storageBucket: "agriconnect-eafc2.firebasestorage.app",
  messagingSenderId: "262546489877",
  appId: "1:262546489877:web:9a8138a2faadfa0a47c41c",
  measurementId: "G-1XZM2R9V77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);