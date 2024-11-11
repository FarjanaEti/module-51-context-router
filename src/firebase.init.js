// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAasYYqi-vyrAgbbJw3onP1giUp1r2czIY",
  authDomain: "context-router.firebaseapp.com",
  projectId: "context-router",
  storageBucket: "context-router.firebasestorage.app",
  messagingSenderId: "476591199363",
  appId: "1:476591199363:web:2e0eaa09d84d53daec77b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);