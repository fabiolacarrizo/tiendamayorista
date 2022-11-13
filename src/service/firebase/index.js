// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirebase, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2s_-ULGQbf9qppkCQ6NS6cbIwi2mumRU",
  authDomain: "tiendamayotistadiego.firebaseapp.com",
  projectId: "tiendamayotistadiego",
  storageBucket: "tiendamayotistadiego.appspot.com",
  messagingSenderId: "244578353009",
  appId: "1:244578353009:web:c9c752d3346843128a80d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)