import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import * as artService from '../services/artService';
import styles from './Create.module.css';

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onArtCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');

        artService.create({
            name,
            description,
            imageUrl,
            type,
        }, user.accessToken)
            .then(result => {
                navigate('/');
            })

    }

    return (

        <section id="create-page" className={styles.create}>
            <form id="create-form" onSubmit={onArtCreate} method="POST">
                <fieldset>
                    <legend>Add Art</legend>
                    <p className={styles.field}>
                        <label htmlFor="name">Name</label>
                        <span className={styles.input}>
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="description">Description</label>
                        <span className={styles.input}>
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="image">Image</label>
                        <span className={styles.input}>
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="type">Type</label>
                        <span className={styles.input}>
                            <select id="type" name="type">
                                <option >Painting</option>
                                <option >Sclupture</option>
                                <option >Poster</option>
                                <option >Other</option>
                            </select>
                        </span>
                    </p>
                    <input className={styles.button} type="submit" value="Add Art" />
                </fieldset>
            </form>
        </section>

    );

}

export default Create;