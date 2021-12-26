import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBPby1J0LPIAgIYLiEIlMg7-8ckH4M2odo",
    authDomain: "mobile-programming-proje-18158.firebaseapp.com",
    projectId: "mobile-programming-proje-18158",
    storageBucket: "mobile-programming-proje-18158.appspot.com",
    messagingSenderId: "630692718111",
    appId: "1:630692718111:web:517d94a1dff1eca876972a",
    measurementId: "G-S36H9TK3N5",
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };