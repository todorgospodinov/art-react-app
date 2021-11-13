import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

if (firebase.apps.length ===0){
firebase.initializeApp(firebaseConfig)
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

//  If you want to start measuring performance in your app, pass a function
//  to log results (for example: reportWebVitals(console.log))
//  or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();