// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBigRqxAKQDYyFVrmCat5TkTdHjuTqsYP0",
  authDomain: "ija-images.firebaseapp.com",
  projectId: "ija-images",
  storageBucket: "ija-images.appspot.com",
  messagingSenderId: "541881332617",
  appId: "1:541881332617:web:c4bb40d8619b7243a36758",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
