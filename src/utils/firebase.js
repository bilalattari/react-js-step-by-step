import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr2R1sryYvVbSNdplyeKYrIHHZ6D0uZyc",
  authDomain: "calcium-pod-256305.firebaseapp.com",
  projectId: "calcium-pod-256305",
  storageBucket: "calcium-pod-256305.appspot.com",
  messagingSenderId: "182256618793",
  appId: "1:182256618793:web:c3c627824b1c28feea3b38",
  measurementId: "G-3R2S7KYERZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };