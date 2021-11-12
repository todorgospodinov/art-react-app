import {Link } from 'react-router-dom';

function GalleryNavigation (){
return (
<section>

<nav className="main-menu">
                        <ul className="menu-area-main">
                           <li> <Link to="index.html">Home</Link> </li>
                           <li> <Link to="about.html">Gallery</Link> </li>
                           <li><Link to="testmonial.html">Testmonial</Link></li>
                           <li><Link to="clients.html">Shop</Link></li>
                           <li><Link to="contact.html">Contact Us</Link></li>
                        </ul>
                     </nav>


</section>

);

}
export default GalleryNavigation;