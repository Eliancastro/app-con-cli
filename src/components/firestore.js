

//import firebase from "firebase"
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPYsTxH2BN_loPUQ6n9CcVVIUdZjZ89Qw",
  authDomain: "app-con-cli.firebaseapp.com",
  projectId: "app-con-cli",
  storageBucket: "app-con-cli.appspot.com",
  messagingSenderId: "1055516971391",
  appId: "1:1055516971391:web:9f4339a41876fcbab94a4a",
  measurementId: "G-4MJLXKRTER"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

/*import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDazjtkN5hVaxZ5Q2b8li-gxAMuzw3QJNg",
  authDomain: "react-57857.firebaseapp.com",
  projectId: "react-57857",
  storageBucket: "react-57857.appspot.com",
  messagingSenderId: "97500362012",
  appId: "1:97500362013:web:c94e0d90cbcf95dbe7f6d8",
  
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db*/