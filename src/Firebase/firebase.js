import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBDbiXL7MG2Erjm2K8bTJViJLds-FES4cs",
    authDomain: "e-mkt-aff75.firebaseapp.com",
    projectId: "e-mkt-aff75",
    storageBucket: "e-mkt-aff75.appspot.com",
    messagingSenderId: "793021273116",
    appId: "1:793021273116:web:68df675b7d7efe475a7bd9"
  };

  const fb = firebase.initializeApp(firebaseConfig)

  export const dataBase = fb.firestore()
  
 