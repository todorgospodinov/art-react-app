import { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
   const { user } = useContext(AuthContext);
   let guestNavigation = (
      <div className={styles.guestNavigation}><li> <Link to="/">Home</Link> </li>
         <li> <Link className={styles.button} to="/gallery">Gallery</Link> </li>
         <li><Link className={styles.button} to="/login">Login</Link></li>
         <li><Link className={styles.button} to="/register">Register</Link></li>
      </div>
   );
   let userNavigation = (
      <div className={styles.userNavigation}>
         <span> Welcome, {user.email} </span>
         <li> <Link to="/">Home</Link> </li>
         <li> <Link className={styles.button} to="/gallery">Gallery</Link> </li>
         <li><Link className={styles.button} to="/my-gallery">My Gallery</Link></li>
         <li><Link className={styles.button} to="/create">Add Art</Link></li>
         <li><Link className={styles.button} to="/logout">Logout</Link></li>
      </div>
   );


   return (
      <header className={styles.section}>
         <div className={styles.header}>
            <div className={styles.container}>
               <div className={styles.row}>
                  <div className={styles.logoSection}>
                   
                        <div className={styles.centerDesk}>
                           <div className={styles.logo} > <Link to="/">Art Gallery <span>Tod's Place</span></Link> </div>
                        
                     </div>
                  </div>
                  <div className={styles.navContainer}>
                     <div className={styles.menuArea}>
                        <div className={styles.limitBox}>
                           <nav className={styles.mainMenu}>
                              <ul className={styles.menuAreaMain}>

                                 {user.email
                                    ? userNavigation
                                    : guestNavigation
                                 }
                                 {/* <li className={styles.last}><Link to="#"><img src="images/search_icon.png" alt="icon" /></Link></li> */}
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