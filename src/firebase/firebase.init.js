// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBMQ_UuoxHur9CuHlINMW6qG_viYAxHUk",
  authDomain: "usefirebase-b77ae.firebaseapp.com",
  projectId: "usefirebase-b77ae",
  storageBucket: "usefirebase-b77ae.firebasestorage.app",
  messagingSenderId: "218695767176",
  appId: "1:218695767176:web:c9107c48a99ca92c0fbb3d",
  measurementId: "G-0KKVW974TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export {auth,analytics }    