import styles from './Register.module.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';



const Register = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });

    }

    return (
        <section id="register-page" className={styles.register}>
            <form className={styles.registerForm} action="" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register</legend>
                    <p className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <span className={styles.input}>
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <span className={styles.input}>
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className={styles.input}>
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