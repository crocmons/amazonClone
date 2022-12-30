import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB1NyD786kds3wYOvEXbqrHlyQpMyqaigE",
  authDomain: "fir-28e31.firebaseapp.com",
  projectId: "fir-28e31",
  storageBucket: "fir-28e31.appspot.com",
  messagingSenderId: "747389954915",
  appId: "1:747389954915:web:2613e3e3b50b12122a0156",
  measurementId: "G-D9K0GRRRHN"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  export default db;