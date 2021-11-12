function Footer() {
    return (
        <div>
<div id="footer" className="Address layout_padding">
       <div className="container">
          <div className="row">
             <div className="col-sm-12">
               <div className="titlepage">
                  <div className="main">
                     <h1 className="address_text">Address</h1>
                  </div>
               </div>
             </div>
          </div>
               <div className="address_2">
                  <div className="row">
                     <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="site_info">
                          <span className="info_icon"><img src="images/map-icon.png" /></span>
                          <span style={{marginTop: '10px'}}>No.123 Chalingt Gates, Supper market New York</span></div>
                     </div>
                     <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="site_info">
                          <span className="info_icon"><img src="images/phone-icon.png" /></span>
                          <span style={{marginTop: '21px'}}>( +71 7986543234 )</span></div>
                     </div>
                     <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="site_info">
                          <span className="info_icon"><img src="images/email-icon.png" /></span>
                          <span style={{marginTop: '21px'}}>demo@gmail.com</span></div>
                     </div>
                     </div> 
                  </div>
               </div>
                  <div className="menu_main">
                     <div className="menu_text">
                        <ul>
                           <li className="active"><a href="#">Home</a></li>                         
                           <li><a href="about.html">About</a></li>
                           <li><a href="testmonial.html">Testmonial</a></li>
                           <li><a href="clients.html">Shop</a></li>
                           <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                     </div>
                  </div>
       </div>
      <div id="plant" className="footer layout_padding">
         <div className="container">
            <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
         </div>
      </div>
</div>
    );
}
export default Footer;