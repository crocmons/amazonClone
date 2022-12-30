import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAggkEQJVEnr1HQ48oEZg9ar7oMrAYCe3I",
  authDomain: "ecommerce-6891a.firebaseapp.com",
  projectId: "ecommerce-6891a",
  storageBucket: "ecommerce-6891a.appspot.com",
  messagingSenderId: "248539762625",
  appId: "1:248539762625:web:a355c68af87aa349e12940"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  export default db;