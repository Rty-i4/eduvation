import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDc1QeYkPB-S1lJvc6Ym4mCXJgw56d93LM",
  authDomain: "eduvation-b02a9.firebaseapp.com",
  projectId: "eduvation-b02a9",
  storageBucket: "eduvation-b02a9.appspot.com",
  messagingSenderId: "310164038714",
  appId: "1:310164038714:web:67095ed782b0f8907b8103",
  measurementId: "G-6XDYQGBR58",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
