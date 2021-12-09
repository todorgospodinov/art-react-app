import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Register.module.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import useArtState from '../hooks/useArtState';
import * as authService from '../services/authService';
import { AuthContext } from '../contexts/AuthContext';

import useForm from '../hooks/useForm';



const Register = () => {


    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { artId } = useParams();
    const [art] = useArtState(artId);
    


    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
      }
      const {handleChange, values,errors,handleSubmit} = useForm(formLogin);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authService.register(email, password)
            .then(authData => {
                login(authData);
                navigate('/');
            });
    }


 

    // const passwordChangeHandler = (e) => {
    //     let currentPass = e.target.value;
    //     if ((currentPass.length < 6) || (currentPass.length > 10)) {
    //         setErrors(state => ({ ...state, password: 'Your password should be between 6 and 10 characters!' }))
    //     } else {
    //         setErrors(state => ({ ...state, password: false }))
    //     }
    // };


   


    return (
        <section id="register-page" className={styles.register}>
            <form className={styles.registerForm} action="" method="POST" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Register</legend>
                    <p className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <span className={styles.input} style={{ borderColor: errors.email ? 'red' : 'inherit' }}>
                            <input type="text" name="email" id="email" placeholder="еmail@email.com" defaultValue={art.email} onChange={handleChange} />
                        </span>
                        <span className="errorColor" style={{ display: errors.email ? 'inline' : 'hidden' }}> {errors.email}</span>

                    </p>
                    <p className={styles.field}>
                        <label htmlFor="password">Password</label>
                        <span className={styles.input} style={{ borderColor: errors.password ? 'red' : 'inherit' }} >
                            <input type="password" name="password" id="password" placeholder="Pass1234" defaultValue={art.password} onChange={handleChange} />
                        </span>
                        <span className="errorColor" style={{ display: errors.password ? 'inline' : 'hidden' }}> {errors.password}</span>
                    </p>
                    <p className={styles.field}>
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className={styles.input}>
                            <input type="password" name="confirmPass" id="repeatPass" placeholder="repeat password" />
                        </span>
                    </p>
                    <input className={styles.button} type="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;