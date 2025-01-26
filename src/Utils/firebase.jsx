// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzQE2_9bJskij2KZD8trNQLBR82E5Mljo",
  authDomain: "netflix-gpt-1f85b.firebaseapp.com",
  projectId: "netflix-gpt-1f85b",
  storageBucket: "netflix-gpt-1f85b.firebasestorage.app",
  messagingSenderId: "729694024587",
  appId: "1:729694024587:web:8f421752074f6d1359758e",
  measurementId: "G-X93695XTYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();