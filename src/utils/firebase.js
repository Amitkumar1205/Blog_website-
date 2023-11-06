// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE ,
  authDomain: "blog-8cc62.firebaseapp.com",
  projectId: "blog-8cc62",
  storageBucket: "blog-8cc62.appspot.com",
  messagingSenderId: "429003124808",
  appId: "1:429003124808:web:efd8718f9940faaa23687d",
  measurementId: "G-6CSG17THSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
