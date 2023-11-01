// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy4uKnp_zO3HjaWGwUNE59aOujrhxcgZo",
  authDomain: "netlfixgpt-a4c06.firebaseapp.com",
  projectId: "netlfixgpt-a4c06",
  storageBucket: "netlfixgpt-a4c06.appspot.com",
  messagingSenderId: "995050844083",
  appId: "1:995050844083:web:460fa9f0b951cb2d7065c6",
  measurementId: "G-T9M0WFEK60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();