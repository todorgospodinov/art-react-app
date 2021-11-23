import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';

import styles from './Login.module.css';

const Login = ({
    onLogin
}) => {
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');

        authService.login(email);
        
        onLogin(email);

        navigate('/');
    }

    return (
        
<section id="login-page" className="login">
            <form className={styles.loginForm} onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend>Login</legend>
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