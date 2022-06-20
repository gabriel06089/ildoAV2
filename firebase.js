// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAcCY8CJV0F9PPtHZcRmE_uCOuF8OZKrg",
  authDomain: "checklistfirebase.firebaseapp.com",
  databaseURL: "https://checklistfirebase-default-rtdb.firebaseio.com",
  projectId: "checklistfirebase",
  storageBucket: "checklistfirebase.appspot.com",
  messagingSenderId: "987206803590",
  appId: "1:987206803590:web:e748a6b87450bda5c0f107",
  measurementId: "G-SMQT4KQ4YC"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };