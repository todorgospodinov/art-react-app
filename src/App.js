import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import * as authService from './services/authService';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Register from './components/Register'
import Create from './components/Create';
import Details from './components/Details';




function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    })

  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    })
  }

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: null,
    })
  };

  return (
    <div className="App" >
      <Header {...userInfo} />
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:artId" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;