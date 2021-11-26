import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as artService from '../services/artService';
import styles from './Details.module.css'

const Details = () => {
    const [art, setArt] = useState({});
    const { artId } = useParams();

    useEffect(async () => {
        let artResult = await artService.getOne(artId);

        setArt(artResult);

    }, []);

    return (
        <section id="details-page" className={styles.details}>
            <div className="pet-information">
                <h3>Name: {art.name}</h3>
                <p className={styles.type}>Type: {art.type}</p>
                <p className={styles.img}><img src={art.imageUrl} /></p>
                <div className={styles.actions}>
                    <a className={styles.button} href="#">Edit</a>
                    <a className={styles.button} href="#">Delete</a>
                    
                    <a className={styles.button} href="#">Like</a>
                    
                    <div className={styles.likes}>
						<img className={styles.hearts} src="/images/heart.png" />
						<span id="total-likes">Likes: {art.likes}</span>
					</div>
                </div>
            </div>
            <div className={styles.petDescription}>
                <h3>Description:</h3>
                <p>{art.description}</p>
            </div>
        </section>
    );

}

export default Details;