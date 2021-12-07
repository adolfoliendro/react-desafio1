// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs_RnNf9z1J7aqy__jNdISTsxIa0xMibk",
  authDomain: "coder-reactjs-liendro.firebaseapp.com",
  projectId: "coder-reactjs-liendro",
  storageBucket: "coder-reactjs-liendro.appspot.com",
  messagingSenderId: "790717471000",
  appId: "1:790717471000:web:4a36d02fd01b11ba59a66d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
