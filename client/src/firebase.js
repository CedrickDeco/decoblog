// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY,);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "deco-blog.firebaseapp.com",
  projectId: "deco-blog",
  storageBucket: "deco-blog.appspot.com",
  messagingSenderId: "325255225459",
  appId: "1:325255225459:web:f7b17a8ec1b61f44620a06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);