import React from "react";
import firebase from 'firebase';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
import { useEffect, useState } from 'react';


function App() {
    const [uid, setUID] = useState(null)
    var provider = new firebase.auth.GoogleAuthProvider();
    useEffect(() => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(`User has signed in:${user.uid}`);
                setUID(user.uid)
                var uid = user.uid;

            } else {
                console.log(`User has signed out.`);
            }
        });

    })

    function signIn() {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            });
    }

    function signOut() {
        firebase.auth().signOut()
            .then(() => {
                console.log(`Signed out successfuly.`)
            })
            .catch((err) => {
                console.log(`Signed out has failed:${err}`);
            })

    }


    return (
        <div className="App" >
            <Header />
            {/* <Gallery /> */}

            {/* <Main/> */}
            {/* <Routes>
                <Route path="/gallery" exact component={Gallery} />
            </Routes> */}
            <Footer />
        </div>
    );
}

export default App;