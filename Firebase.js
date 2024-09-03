import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4rMT8RKbA3kWZUQ6K3AdDuBui5eqpwr0",
  authDomain: "appcripto-cf118.firebaseapp.com",
  projectId: "appcripto-cf118",
  storageBucket: "appcripto-cf118.appspot.com",
  messagingSenderId: "835706751192",
  appId: "1:835706751192:web:2bcf783bbc3ec900242fad"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);