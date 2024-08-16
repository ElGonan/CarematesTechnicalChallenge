// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmz8WX2fpxzpOd3ZwCE6WbXs-XEjj9074",
  authDomain: "carematesdemo.firebaseapp.com",
  projectId: "carematesdemo",
  storageBucket: "carematesdemo.appspot.com",
  messagingSenderId: "3350332924",
  appId: "1:3350332924:web:e0ca25e4c3890ce2615e79",
  measurementId: "G-PRHPHD0YST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)