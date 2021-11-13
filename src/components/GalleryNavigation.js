import {Link } from 'react-router-dom';

function GalleryNavigation (){
return (
<section>

<nav className="main-menu">
                        <ul className="menu-area-main">
                           <li> <Link to="/categories/all">All</Link> </li>
                           <li> <Link to="/categories/paintings">Paintings</Link> </li>
                           <li><Link to="/categories/scluptures">Sculptures</Link></li>
                           <li><Link to="/categories/ceramics">Ceramics</Link></li>
                           <li><Link to="/categories/posters">Posters</Link></li>
                           <li><Link to="/categories/others">Others</Link></li>
                        </ul>

                     </nav>
</section>

);

}
export default GalleryNavigation;