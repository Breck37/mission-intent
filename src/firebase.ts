import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCyJ3KncXIbONonR9V1m_h07ihbE8ygmD4",
  authDomain: "mission-intent.firebaseapp.com",
  databaseURL: "https://mission-intent-default-rtdb.firebaseio.com",
  projectId: "mission-intent",
  storageBucket: "mission-intent.appspot.com",
  messagingSenderId: "974769438272",
  appId: "1:974769438272:web:67eb05c5cf7d19cbf8a9a5",
  measurementId: "G-5F121R9Z7B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();