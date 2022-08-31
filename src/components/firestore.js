
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDazjtkN5hVaxZ5Q2b8li-gxAMuzw3QJNg",
  authDomain: "react-57857.firebaseapp.com",
  projectId: "react-57857",
  storageBucket: "react-57857.appspot.com",
  messagingSenderId: "97500362012",
  appId: "1:97500362013:web:c94e0d90cbcf95dbe7f6d8",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db