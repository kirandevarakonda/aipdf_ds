// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore, doc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//aipdff
// const firebaseConfig = {
//   apiKey: "AIzaSyB_PYhEOIJGhEh65RJdO-qXiuiJSqo_VEE",
//   authDomain: "aipdff.firebaseapp.com",
//   projectId: "aipdff",
//   storageBucket: "aipdff.firebasestorage.app",
//   messagingSenderId: "440174314776",
//   appId: "1:440174314776:web:3088a4428628b5164b8a6d",
//   measurementId: "G-CEM2SL3WE3"
// };

//aipdf
const firebaseConfig = {
  apiKey: "AIzaSyD3an_Z1JLDqJUImGvWAfaqENm6N0dP75k",
  authDomain: "aipdf-30223.firebaseapp.com",
  projectId: "aipdf-30223",
  storageBucket: "aipdf-30223.appspot.com",
  messagingSenderId: "966565455509",
  appId: "1:966565455509:web:93c442fce0936c97f35d9c",
  measurementId: "G-XRH176J1RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithEmailAndPassword, signInWithPopup, storage };
// const analytics = getAnalytics(app);