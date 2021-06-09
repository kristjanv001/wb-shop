import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDioMW9bHUXKF5uL98SZ9sDpUf5OqgtB6A",
  authDomain: "clone-d1a1a.firebaseapp.com",
  projectId: "clone-d1a1a",
  storageBucket: "clone-d1a1a.appspot.com",
  messagingSenderId: "505810713027",
  appId: "1:505810713027:web:d891ad362f1650042de576",
  measurementId: "G-ZQBJVSVSNE",
};

// nextjs specific
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
