import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import * as authService from '../services/authService';
import { userSchema } from './Validations/UserValidation';
import * as yup from 'yup';

import styles from './Login.module.css';

const Login = () => {
     const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <section id="login-page" className={styles.login}>
            <form className={styles.loginForm} onSubmit={onLoginHandler} method="POST">
             
                <fieldset>
                <legend className={styles.formName} >Login</legend> 
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
                    <input className={styles.button} type="submit" value="Login" />
                </fieldset>
            </form>
        </section>



    );
}

export default Login;