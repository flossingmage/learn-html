// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaOwp_QsdGFfpFpvNsTsC42YzQ59t3qEU",
  authDomain: "learning-js-d3712.firebaseapp.com",
  projectId: "learning-js-d3712",
  storageBucket: "learning-js-d3712.appspot.com",
  messagingSenderId: "283611153357",
  appId: "1:283611153357:web:ed6095fe11a4f5be2cba84",
  measurementId: "G-87G276YJ0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);