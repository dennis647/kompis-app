// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt9SjdqnZjRsbxWpx9vKGHqTFvUkBI-84",
    authDomain: "kompis-webapp.firebaseapp.com",
    projectId: "kompis-webapp",
    storageBucket: "kompis-webapp.firebasestorage.app",
    messagingSenderId: "1028059341845",
    appId: "1:1028059341845:web:1612e2ac52331cea3e5a1c",
    measurementId: "G-RNGTRB3NK5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
