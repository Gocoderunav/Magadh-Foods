// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFNl4GeqsvIYxnI9Bvqp-0I3RhXwRY-SY",
  authDomain: "react-course-81764.firebaseapp.com",
  projectId: "react-course-81764",
  storageBucket: "react-course-81764.appspot.com",
  messagingSenderId: "213510258316",
  appId: "1:213510258316:web:5546bb569c354d4c7c85a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
