import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider/Slider';
import Gallery from './components/Gallery';
import MyGallery from './components/MyGallery';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register'
import Create from './components/Create';
import Details from './components/Details';
import CustomErrorBoundary from './components/CustomErrorBoundary';
import './App.css';


const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',

};


function App() {

  //const [user, setUser] = useLocalStorage('user', initialAuthState);
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: '',
  
  });


  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
<CustomErrorBoundary>
    <AuthContext.Provider value={{ user, login, logout }}>
      <div className="App" >
        <Header />
        <main id="site-content">
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/my-gallery" element={<MyGallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:artId" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
    </CustomErrorBoundary>
  );
}

export default App;