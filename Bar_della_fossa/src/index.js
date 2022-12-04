// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
var $ = require('jquery');  //per jQuery senò non le scarica
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCETuHC0yl4xJ59Ox6fm7IYO-2dvp1X17Q",
  authDomain: "gabrach-25273.firebaseapp.com",
  databaseURL: "https://gabrach-25273-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gabrach-25273",
  storageBucket: "gabrach-25273.appspot.com",
  messagingSenderId: "716936233864",
  appId: "1:716936233864:web:5b494fbe9337b5e943b03d"
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
  }
  $('.botAlert').onclick = function() { 
    alert('Never Gonna Give You Up');
  };
});


