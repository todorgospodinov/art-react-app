import { Switch, Route } from "react-router-dom";
//import { auth } from './utils/firebase';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Gallery from './components/Gallery';
 // import Login from './components/Login';
//import Register from './components/Register'

//import { useEffect, useState } from 'react';


function App() {

  //   const [user, setUser] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged(setUser);
  // }, []);

  // const authInfo = {
  //   isAuthenticated: Boolean(user),
  //   username: user?.email,
  // };


    return (
        <div className="App" >
            <Header />
            
            <Switch>
            <Route path="/" exact component={Main} />
                <Route path="/gallery" component={Gallery} />
                {/* <Route path="/login" component={Login} />
                <Route path="/register" component={Register} /> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default App;