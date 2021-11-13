import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="section">
                  <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo"> <Link to="/"><img src="images/logo.png" alt="#"/></Link> </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div className="menu-area">
                        <div className="limit-box">
                           <nav className="main-menu">
                              <ul className="menu-area-main">
                                 <li> <Link to="/">Home</Link> </li>
                                 <li> <Link to="/gallery">Gallery</Link> </li>
                                 <li><Link to="">Testmonial</Link></li>
                                 <li><Link to="/login">Login</Link></li>
                                 <li><Link to="/register">Register</Link></li>
                                 <li className="last"><Link to="#"><img src="images/search_icon.png" alt="icon"/></Link></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         
      </header> 
    );
}
export default Header;