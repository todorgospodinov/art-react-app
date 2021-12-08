import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Register.module.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import useArtState from '../hooks/useArtState'
import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';



const Register = () => {
    const [errors, setErrors] = useState({email: null})
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { artId } = useParams();
    const [art] = useArtState(artId);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);

                navigate('/');
            });

    }


    const emailChangeHandler = (e) => {
        let currentEmail = e.target.value;
        if (currentEmail.length < 3) {
            setErrors(state => ({ ...state, email: 'Your name sould be at least 3 characters!' }))
        } else if (currentEmail.length > 10) {
            setErrors(state => ({ ...state, email: 'Your name sould be max 10 characters!' }))
        } else {
            setErrors(state => ({ ...state, email: false }))
        }
    
};


const passwordChangeHandler = (e) => {
    let currentPass = e.target.value;
    if (currentPass.length < 6) {
        setErrors(state => ({ ...state, email: 'Your email should be at least 6 characters!' }))
    } else if (currentPass.length > 10) {
        setErrors(state => ({ ...state, email: 'Your email should be max 10 characters!' }))
    } else {
        setErrors(state => ({ ...state, email: false }))
    }
};


return (
    <section id="register-page" className={styles.register}>
        <form className={styles.registerForm} action="" method="POST" onSubmit={registerSubmitHandler}>
            <fieldset>
                <legend>Register</legend>
                <p className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <span className={styles.input} style={{borderColor: errors.email ? 'red' : 'inherit'}}>
                        <input type="text" name="email" id="email" placeholder="Email"  defaultValue={art.email} onBlur={emailChangeHandler}  />
                    </span>
<span className="errorColor" style={{display:errors.email ? 'inline': 'hidden'}}> {errors.email}</span>

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