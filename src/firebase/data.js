
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNkQPYcaUft6kBiJfZiRaKyCUi9HWTjpE",
  authDomain: "porfolio-1cd73.firebaseapp.com",
  projectId: "porfolio-1cd73",
  storageBucket: "porfolio-1cd73.appspot.com",
  messagingSenderId: "295653000863",
  appId: "1:295653000863:web:377665f6eaebffc53c04aa",
  measurementId: "G-9EDKZLT5DK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};