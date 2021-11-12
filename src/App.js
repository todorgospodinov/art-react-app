import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';


function App() {
    return (
        <div className="App" >
            <Header/>
            <Gallery/>

            {/* <Main/> */}
            {/* <Routes>
                <Route path="/" component={Gallery} />
            </Routes> */}
            <Footer />
        </div>
    );
}

export default App;