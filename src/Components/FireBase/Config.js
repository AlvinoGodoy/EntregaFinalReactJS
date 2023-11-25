// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYKnwdOpbZytzhSU0swVCvLthAH8zZfeE",
  authDomain: "e-commerce-activate.firebaseapp.com",
  projectId: "e-commerce-activate",
  storageBucket: "e-commerce-activate.appspot.com",
  messagingSenderId: "436667558052",
  appId: "1:436667558052:web:ec07196dfa03a9b9489e31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;