import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './ArtCard.module.css';
//import { isAuth } from './hoc/isAuth';

const ArtCard =({
art, user
})=> {

    return (<section>

        <div className={styles.artCard}>
            <div className={styles.sportProduct}>
                <figure><img src={art.imageUrl} alt="img" /></figure>
                <h3> <strong className={styles.priceText}>{art.type}</strong></h3>
                <h4>{art.name}</h4>
                <Link className={styles.button} to={`/details/${art._id}`}>Details</Link>
                
           
            </div>
        </div>

    </section>
    );
}

export default ArtCard;