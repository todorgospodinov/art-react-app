import React from "react";
import firebase from 'firebase/app';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
// import Login from './components/Login';
// import Register from './components/Register'

import { useEffect, useState } from 'react';


function App() {

    return (
        <div className="App" >
            <Header />
            <Main/>
            <Routes>
            <Route path="/" component={Main} />
                <Route path="/gallery" component={Gallery} />
                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;