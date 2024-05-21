// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa-7Q4WzRXZQCtyMQDgzkHaPSJRYSVAWM",
  authDomain: "prueba-tomi-casabona.firebaseapp.com",
  projectId: "prueba-tomi-casabona",
  storageBucket: "prueba-tomi-casabona.appspot.com",
  messagingSenderId: "1009356613003",
  appId: "1:1009356613003:web:328f926991e96a94d37b8e",
  measurementId: "G-DY8D1YXQV9",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const analyticsFirebase = getAnalytics(appFirebase);
export const auth = getAuth(appFirebase);
