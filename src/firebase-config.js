// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdVFDVfLuqwuzqaZORjhoA4z3sx7qJzcU",
  authDomain: "blogapp-404fd.firebaseapp.com",
  projectId: "blogapp-404fd",
  storageBucket: "blogapp-404fd.appspot.com",
  messagingSenderId: "807938184067",
  appId: "1:807938184067:web:52e64dd933931e59249cb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
