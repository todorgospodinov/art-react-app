function Header() {
    return (
        <header className="section">
                  <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#"/></a> </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div className="menu-area">
                        <div className="limit-box">
                           <nav className="main-menu">
                              <ul className="menu-area-main">
                                 <li> <a href="index.html">Home</a> </li>
                                 <li> <a href="about.html">Gallery</a> </li>
                                 <li><a href="testmonial.html">Testmonial</a></li>
                                 <li><a href="clients.html">Shop</a></li>
                                 <li><a href="contact.html">Contact Us</a></li>
                                 <li className="last"><a href="#"><img src="images/search_icon.png" alt="icon"/></a></li>
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