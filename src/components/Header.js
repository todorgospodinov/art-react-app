import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = ({
   isAuthenticated,
   username,

}) => {

   return (
      <header className={styles.section}>
         <div className={styles.header}>
            <div className={styles.container}>
               <div className={styles.row}>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className={styles.full}>
                        <div className={styles.centerDesk}>
                           <div className={styles.logo}> <Link to="/"><img src="images/logo.png" alt="#" /></Link> </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div className={styles.menuArea}>
                        <div className={styles.limitBox}>
                           <nav className={styles.mainMenu}>
                              <ul className={styles.menuAreaMain}>
                                 <li> <Link to="/">Home</Link> </li>
                                 <li> <Link className={styles.button} to="/gallery">Gallery</Link> </li>
                                
                                    <li><Link className={styles.button} to="/login">Login</Link></li>
                                    <li><Link className={styles.button} to="/register">Register</Link></li>
                                
                                 
                                    <span> Welcome, {username} </span>
                                    <li><Link className={styles.button} to="my-art">My Art</Link></li>
                                    <li><Link className={styles.button} to="create">Add Art</Link></li>
                                    <li><Link className={styles.button} to="#">Logout</Link></li>
                                 


                                 <li className={styles.last}><Link to="#"><img src="images/search_icon.png" alt="icon" /></Link></li>
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