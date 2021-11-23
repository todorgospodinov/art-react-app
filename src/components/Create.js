import styles from './Create.module.css';

const Create =()=>{

    return (
        
        <section id="create-page" className={styles.create}>
            <form id="create-form"  method="POST">
                <fieldset>
                    <legend>Add Art</legend>
                    <p className={styles.field}>
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="paint">Paint</option>
                                <option value="sculpture">Sclupture</option>
                                <option value="poster">Poster</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Art" />
                </fieldset>
            </form>
        </section>    
       
    );

}

export default Create;