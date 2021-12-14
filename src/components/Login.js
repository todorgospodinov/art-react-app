import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useNotificationContext, types } from '../contexts/NotificationContext';
import * as authService from '../services/authService';
import useForm from '../hooks/useForm';
import { useParams } from 'react-router-dom';
import useArtState from '../hooks/useArtState';

import styles from './Login.module.css';

const Login = () => {
    
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const {addNotification} = useNotificationContext;
    const { artId } = useParams();
    const [art] = useArtState(artId);

    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
      const {handleChange, values,errors} = useForm(formLogin);
      



    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);
              // addNotification('You logged in',types.success);
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
                        <span className={styles.input} style={{ borderColor: errors.email ? 'red' : 'inherit' }}>
                            <input type="text" name="email" id="email" placeholder="еmail@email.com" defaultValue={art.email} onChange={handleChange}/>
                        </span>
                        <span className="errorColor" style={{ display: errors.email ? 'inline' : 'hidden' }}> {errors.email}</span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <span className={styles.input} style={{ borderColor: errors.password ? 'red' : 'inherit' }}>
                            <input type="password" name="password" id="password" placeholder="Pass1234" defaultValue={art.password} onChange={handleChange} />
                        </span>
                        <span className="errorColor" style={{ display: errors.password ? 'inline' : 'hidden' }}> {errors.password}</span>
                    </p>
                    <input className={styles.button} type="submit" value="Login" />
                </fieldset>
            </form>
        </section>



    );
}

export default Login;