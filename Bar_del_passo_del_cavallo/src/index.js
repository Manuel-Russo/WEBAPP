import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";
var $ = require('jquery');
import '../scss/styles.scss';
import { Modal } from 'bootstrap';

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

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const prodottiRef = ref(db, 'prodotti/');


$('#bottone').on('click',function(){
  $("#modal_title").html("ciao");
  $("#modal_content").html("come va?");
  (new Modal($('#myModal'))).show();
});



onValue(prodottiRef, (snapshot) => {
    const data = snapshot.val();
    $('#contenuto').html("");
    for(var k in data)    {
        $('#contenuto').append(data[k].nome + "<br>");

    }
});