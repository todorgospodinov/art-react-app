import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as artService from '../services/artService';
import useArtState from '../hooks/useArtState';
import styles from './Edit.module.css'
//import { Alert } from 'react-bootstrap';

const types = [
    { value: 'painting', text: 'Painting' },
    { value: 'poster', text: 'Poster' },
    { value: 'sclupture', text: 'Sclupture' },
    { value: 'other', text: 'Other' },
]

const Edit = () => {
    const { artId } = useParams();
    const [errors, setErrors] = useState({name: false})
    const [art, setArt] = useArtState(artId);
    const navigate = useNavigate();

    const artEditSubmitHandler = (e) => {
        e.preventDefault();

        let artData = Object.fromEntries(new FormData(e.currentTarget))

        artService.update(art._id, artData)
        .then(result => {
            navigate('/my-gallery');
        });
    }



    return (
        <section id="edit-page" className={styles.edit}>
            <form id="edit-form" method="POST" onSubmit={artEditSubmitHandler}>
                <fieldset>
                    <legend>Edit</legend>
                    <p className={styles.field}>
                        <label htmlFor="name">Name</label>
                        <span className={styles.input} style={{borderColor: errors.name ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={art.name}  />
                        </span>
                        {/* <Alert variant="danger" show={errors.name}>{errors.name}</Alert> */}
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="description">Description</label>
                        <span className={styles.input}>
                            <textarea name="description" id="description" defaultValue={art.description} />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="image">Image</label>
                        <span className={styles.input}>
                            <input type="text" name="imageUrl" id="image" defaultValue={art.imageUrl} />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="type">Type</label>
                        <span className={styles.input}>
                            <select id="type" name="type" value={art.type} onChange={(e) => setArt(s => ({...s, type: e.target.value}))}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className={styles.button} type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
}

export default Edit;