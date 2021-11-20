import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Register from './components/Register'




function App() {


    return (
        <div className="App" >
            <Header />
            <main id="site-content">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;