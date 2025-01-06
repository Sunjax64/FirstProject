// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd4sLTQ2ysYfexbJJDVQLwj3w7KthPi7I",
  authDomain: "imagineproject2024.firebaseapp.com",
  projectId: "imagineproject2024",
  storageBucket: "imagineproject2024.firebasestorage.app",
  messagingSenderId: "724999800757",
  appId: "1:724999800757:web:5ba2b21b2494c33d503bfc",
  measurementId: "G-8NF2CMFGQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);