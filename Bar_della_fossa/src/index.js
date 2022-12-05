// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var $ = require('jquery');  //per jQuery senò non le scarica
// Your web app's Firebase configuration
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
const db = getDatabase();
const prodottiRef = ref(db, 'prodotti');
onValue(prodottiRef,(snapshot)=>{
  for(var k in snapshot.val()){
    //snapshot.val()=la parte di database a oggetti che leggo a valle di prodotti 
    //un oggetto in javascript puo essere usato indifferentemente con la dot notation o come i dictionari di pyton infatti posso scrivere al posto k  in questo modo
    //snapshot.val()[k][nome]
    $('#contenuto').append("<tr>"+"<td>"+k+"</td>"+"<td>"+snapshot.val()[k].nome+"</td>"+"<td>" + "<button class='botAlert'>Schiaccia qui</button>" + "</td>"+"</tr>");
    $('.botAlert').onclick = function() {
      console.log("fail");
      alert('Never Gonna Give You Up');
    };
  
  }
  
});


