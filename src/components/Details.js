import { useState, useEffect } from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import * as artService from '../services/artService';
import styles from './Details.module.css'
import { useAuthContext } from '../contexts/AuthContext';
import * as likeService from '../services/likeService';
import useArtState from '../hooks/useArtState';


    const Details = () => {
        const navigate = useNavigate();
        const { user } = useAuthContext();
        const { artId } = useParams();
        const [art, setArt] = useArtState(artId);
        
    

        useEffect(() => {
            likeService.getArtLikes(artId)
                .then(likes => {
                    setArt(state => ({...state, likes}))
                })
        }, []);




    const deleteHandler = (e) => {
        e.preventDefault();

        artService.remove(artId, user.accessToken)
            .then(() => {
                navigate('/');
            });
    };




    const likeButtonClick = () => {
        if (user._id === art._ownerId) {
            return;
        }

        // if (art.likes.includes(user._id)) {
            
        //     return;
        // }

        likeService.like(user._id, artId)
            .then(() => {
                setArt(state =>
                     ({...state, likes: [...state.likes, user._id]}));

               // addNotification('', types.success);
            });
    };




    const ownerButtons = (
        <>
            <Link className={styles.button} to={`/edit/${art._id}`} >Edit</Link>
            <a className={styles.button} onClick={deleteHandler} >Delete</a>
        </>
    );

    const userButtons = <a className={styles.button} onClick={likeButtonClick}>Like</a>;


    return (
        <section id="" className={styles.details}>
            <div className={styles.petInformation}>
                <h3>Name: {art.name}</h3>
                <p className={styles.type}>Type: {art.type}</p>
                <p className={styles.img}><img src={art.imageUrl} /></p>
                <div className={styles.actions}>

                    {user._id && user._id ==art._ownerId
                        ? ownerButtons
                        : userButtons
                    }


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