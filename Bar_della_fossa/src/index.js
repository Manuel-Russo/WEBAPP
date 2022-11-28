// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue} from "firebase/database";
var $ = require('jquery');  //per jQuery
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85vz6cMDje67KIxJzWCzpDABZmySzA5o",
  authDomain: "bargabrach.firebaseapp.com",
  databaseURL: "https://bargabrach-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bargabrach",
  storageBucket: "bargabrach.appspot.com",
  messagingSenderId: "950724918886",
  appId: "1:950724918886:web:ae6090c7bf363e1584b7a7",
  measurementId: "G-KZ26VCVKN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const prodottiRef = ref(db, 'prodotti');
onValue(prodottiRef, (snapshot) => { //interfaccia per leggere dal database, trova i valori e li scarica
  //snapshot.val() è la parte di database ad oggetti che leggo a valle di prodotti
  //un oggetto in js può essere usato indefferentemente con la dot notation o come i dict (o mappe) in py
  for(var k in snapshot.val()) {
    $('#contenuto').append(snapshot.val()[k].nome+"<br>");
  }
});