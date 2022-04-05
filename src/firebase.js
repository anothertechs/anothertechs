import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsbrZK7dZtWrHCuRFkiZVLhhiEMakmCs8",
  authDomain: "conponsandoffer-5e013.firebaseapp.com",
  projectId: "conponsandoffer-5e013",
  storageBucket: "conponsandoffer-5e013.appspot.com",
  messagingSenderId: "616710111339",
  appId: "1:616710111339:web:4124d044f22991199db12e",
  measurementId: "G-LP5EKYPLGP",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
