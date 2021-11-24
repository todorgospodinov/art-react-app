import styles from './Register.module.css';
const Register = ()=>{
    
    
    return (
        <section id="register-page" className={styles.register}>
            <form className={styles.registerForm} action="" method="">
                <fieldset>
                    <legend>Register</legend>
                    <p className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className={styles.button} type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;