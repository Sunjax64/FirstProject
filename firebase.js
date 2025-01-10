// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL33nBPIJDhm98XvHXA7POctuoKbvWR9c",
  authDomain: "counter-calories-353f4.firebaseapp.com",
  projectId: "counter-calories-353f4",
  storageBucket: "counter-calories-353f4.appspot.com",
  messagingSenderId: "563477271936",
  appId: "1:563477271936:web:97e152aacd4898aab45d65",
  measurementId: "G-8M2ZK1BWLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
