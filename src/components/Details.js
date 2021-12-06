import { useState, useEffect, useContext } from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import * as artService from '../services/artService';
import styles from './Details.module.css'
import { AuthContext } from '../contexts/AuthContext';



    const Details = () => {
        const navigate = useNavigate();
        const { user } = useContext(AuthContext);
        const [art, setArt] = useState({});
        const { artId } = useParams();
    
        useEffect(() => {
        artService.getOne(artId)
                .then(artResult => {
                    setArt(artResult);
                })
        }, [artId]);




    const deleteHandler = (e) => {
        e.preventDefault();

        artService.remove(artId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    };


   

    const ownerButtons = (
        <>
            <Link className={styles.button}  >Edit</Link>
            <Link className={styles.button} onClick={deleteHandler} >Delete</Link>
        </>
    );

    const userButtons = <Link className={styles.button} href="#">Like</Link>;


    return (
        <section id="" className={styles.details}>
            <div className={styles.petInformation}>
                <h3>Name: {art.name}</h3>
                <p className={styles.type}>Type: {art.type}</p>
                <p className={styles.img}><img src={art.imageUrl} /></p>
                <div className={styles.actions}>

                    {user._id && (user._id == art._ownerId
                        ? ownerButtons
                        : userButtons
                    )}

                    <div className={styles.likes}>
                        <img className={styles.hearts} src="/images/heart.png" />
                        <span id="total-likes">Likes: {art.likes?.length}</span>
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