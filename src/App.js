import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register'
import Create from './components/Create';
import Details from './components/Details';




function App() {

  const [user,setUser] = useState({
    accessToken: '',
    email: '',
    _id: ''
  });

  const login = (authData) => {
    setUser(authData);
  }

  const onLogout = () => {

  };

  return (

    <AuthContext.Provider value={{user,login}}>
      <div className="App" >
        <Header />
        <main id="site-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/logout" element={<Logout  />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:artId" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;