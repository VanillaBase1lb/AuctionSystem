import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyBMYX0Ij8TDIcyRpBFO2jFik5uP0vgtS0E",
  authDomain: "neelami-ee595.firebaseapp.com",
  projectId: "neelami-ee595",
  storageBucket: "neelami-ee595.appspot.com",
  messagingSenderId: "142034131318",
  appId: "1:142034131318:web:469c4fbc8712d3a08a4257"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
