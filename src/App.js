import { Routes, Route } from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';
import {NotificationProvider} from './contexts/NotificationContext';
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
import Edit from './components/Edit';
import Details from './components/Details';
import Notification from './components/Common/Notification';
import CustomErrorBoundary from './components/CustomErrorBoundary';
import './App.css';


const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',

};


function App() {

  const [user, setUser] = useLocalStorage('user', initialAuthState);
  // const [user, setUser] = useState({
  //   _id: '',
  //   email: '',
  //   accessToken: '',
  
  // });


  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthState);
  };

  return (
<CustomErrorBoundary>
    <AuthContext.Provider value={{ user, login, logout }}>
      <NotificationProvider>
      <div className="App" >
        <Header />
        <Notification/>
        <main id="site-content">
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/my-gallery" element={<MyGallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:artId" element={<Edit />} />
            <Route path="/details/:artId" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </NotificationProvider>
    </AuthContext.Provider>
    </CustomErrorBoundary>
  );
}

export default App;