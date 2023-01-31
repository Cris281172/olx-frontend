import {Formik} from 'formik'
import {useEffect, useState, useRef} from 'react';
import * as Yup from 'yup';
import callToAPI from '../../../api'
import {Link} from 'react-router-dom';
import locationHref from "../../../helpers/locationHref";
import NavigationPanel from "../NavigationPanel";
import styles from './Login.module.scss'
import { BiErrorCircle } from "react-icons/bi";

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Wpisz swój e-mail').email('To nie wygląda jak adres mailowy...'),
    password: Yup.string().required('Wpisz hasło').min(6, 'Masz pewność co do hasła? Jest zbyt krótkie.')
});


const Login = () => {
    const[currentPasswordInputType, setCurrentPasswordInputType] = useState('Pokaż')
    const[sendLoginStatus, setSendLoginStatus] = useState(false);
    const passwordInputRef = useRef()


    const togglePasswordVisible = () => {
        passwordInputRef.current.type = passwordInputRef.current.type === 'password' ? 'text' : 'password';
        setCurrentPasswordInputType(passwordInputRef.current.type === 'password' ? 'Pokaż' : 'Ukryj')
    }
    return(
        <div className={styles.loginWrapper}>
            <div className={styles.login}>
                <NavigationPanel panel="login" />
                <div className={styles.forms}>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values) => {
                            callToAPI('/login', 'post', {
                                email: values.email,
                                password: values.password
                            })
                                .then(res => {
                                    if(res.error){
                                        setSendLoginStatus(true);
                                    }
                                    else{
                                        const now = new Date();
                                        now.setTime(now.getTime() + 1000 * 60 * 60);

                                        document.cookie = `token=${res.token};expires=${now.toUTCString()};path=/`;
                                        locationHref('/')
                                    }
                                })
                        }}
                        validationSchema={LoginSchema}
                    >
                        {({
                              errors,
                              touched,
                              handleSubmit,
                              values,
                              handleChange,
                              handleBlur
                          }) => (
                            <form onSubmit={handleSubmit} className={styles.loginForm}>
                                {sendLoginStatus && <h5 className={styles.invalidPasswordOrLogin}>Nieprawidłowy login lub hasło</h5>}
                                <label className={styles.label}>
                                    <h3 className={styles.title}>E-mail</h3>
                                    <div className={styles.inputWrapper}>
                                        <input className={`${styles.input} ${errors.email && touched.email ? styles.error : ''}`} name="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        {errors.email && touched.email ? (
                                            <BiErrorCircle className={styles.errorIcon} />
                                        ) : null}
                                    </div>
                                    {errors.email && touched.email ? (
                                        <p className={styles.errorMessage}>{errors.email}</p>
                                    ) : null}
                                </label>
                                <label className={styles.label}>
                                    <h3 className={styles.title}>Hasło</h3>
                                    <div className={styles.inputWrapper}>
                                        <input ref={passwordInputRef} className={`${styles.input} ${errors.password && touched.password ? styles.error : ''}`} name="password" type="password" value={values.password} onBlur={handleBlur} onChange={handleChange} />
                                        <button onClick={togglePasswordVisible} className={`${styles.showPassword} ${errors.password && touched.password ? styles.errorShowPassword : ''}`}>{currentPasswordInputType}</button>
                                        {errors.password && touched.password ? (
                                            <BiErrorCircle className={styles.errorIcon} />
                                        ) : null}
                                    </div>
                                    {errors.password && touched.password ? (
                                        <p className={styles.errorMessage}>{errors.password}</p>
                                    ) : null}
                                </label>
                                <Link className={styles.forgotPassword} to="/reset">Nie pamiętasz hasła?</Link>
                                <button className={`${styles.loginButton} ${errors.password || errors.email ? styles.disabled : ''}`} disabled={errors.password || errors.email ? true : false}>Zaloguj się</button>
                            </form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default Login;