import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAewtRc_SZ7d7CLj2-zzeMwGLulUmKW5dw",
    authDomain: "gallery-3b18a.firebaseapp.com",
    databaseURL: "https://gallery-3b18a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gallery-3b18a",
    storageBucket: "gallery-3b18a.appspot.com",
    messagingSenderId: "721624446986",
    appId: "1:721624446986:web:daa3787df22b525158c7f3",
    measurementId: "G-NK3B6XD8LZ"
  };

if(!firebase.apps.length){

  firebase.initializeApp(firebaseConfig);}

  export default firebase;

  export const auth = firebase.auth();