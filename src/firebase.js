import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAea2rAtvJT7ZWjpXbYynduZGEEIBMWKqQ",
  authDomain: "test-47845.firebaseapp.com",
  projectId: "test-47845",
  storageBucket: "test-47845.appspot.com",
  messagingSenderId: "363262351447",
  appId: "1:363262351447:web:04ac7fb9be89d8b29d2b12",
  measurementId: "G-PW1G0EG5HV"
  };


 export function initFirebase() {
  const fapp = initializeApp(firebaseConfig);
 }

export function getAuthService() {
  const authService = getAuth()
  return authService
}