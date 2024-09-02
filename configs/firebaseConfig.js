// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-cec78.firebaseapp.com",
  projectId: "blog-cec78",
  storageBucket: "blog-cec78.appspot.com",
  messagingSenderId: "118858306329",
  appId: "1:118858306329:web:cd1a8024da8d675985eb88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
