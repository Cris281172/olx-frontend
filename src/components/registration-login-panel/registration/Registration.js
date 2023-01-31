import {Formik} from 'formik'
import {useEffect, useState, useRef} from 'react';
import * as Yup from 'yup';
import callToAPI from '../../../api'
import {Link} from 'react-router-dom';
import locationHref from "../../../helpers/locationHref";
import NavigationPanel from "../NavigationPanel";
import styles from './Registration.module.scss'
import { BiErrorCircle } from "react-icons/bi";

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Wpisz swój e-mail').email('To nie wygląda jak adres mailowy...'),
    password: Yup.string().required('Wpisz hasło').min(6, 'Masz pewność co do hasła? Jest zbyt krótkie.').matches(/[0-9]+/ , 'Hasło musi zawierać przynajmniej jedną cyfrę oraz jedną wielką i jedną małą literę').matches(/[A-Z]+/ , 'Hasło musi zawierać przynajmniej jedną cyfrę oraz jedną wielką i jedną małą literę'),
});


const Registration = () => {
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
                <NavigationPanel panel="registration" />
                <div className={styles.forms}>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        onSubmit={(values) => {
                            console.log(values)
                            callToAPI('/register', 'post', {
                                email: values.email,
                                password: values.password
                            })
                                .then(res => {
                                    console.log(res);
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
                            <form onSubmit={handleSubmit} className={styles.registerForm}>
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
                                {/*<Link className={styles.forgotPassword} to="/reset">Nie pamiętasz hasła?</Link>*/}
                                <p className={styles.rulesAcceptInformation}>Klikając “Załóż konto”, akceptuję <Link to="" className={styles.linkToRules}>Regulamin serwisu</Link> OLX</p>
                                <p className={styles.privacyInformation}>Przyjmuję do wiadomości, że OLX wykorzystuje moje dane osobowe zgodnie z Polityką prywatności oraz
                                    Polityką dotyczącą plików cookie i podobnych technologii. OLX wykorzystuje zautomatyzowane systemy i partnerów do analizowania, w
                                    jaki sposób korzystam z usług w celu zapewnienia odpowiedniej funkcjonalności produktu, treści, dostosowanych i opartych na zainteresowaniach reklam,
                                    jak również ochrony przed spamem, złośliwym oprogramowaniem i nieuprawnionym korzystaniem z naszych usług.</p>
                                <label className={`${styles.label} ${styles.acceptRules}`}>
                                    <input className={styles.checkbox} type="checkbox" value="1" id="checkboxOneInput"/>
                                    <p className={styles.text}>Wyrażam zgodę na używanie przez Grupę OLX sp. z o.o. środków komunikacji elektronicznej oraz telekomunikacyjnych urządzeń końcowych w celu
                                        przesyłania mi informacji handlowych oraz prowadzenia marketingu (np. newsletter, wiadomości SMS) przez Grupę OLX sp. z o.o.,
                                        podmioty powiązane i partnerów biznesowych. Moja zgoda obejmuje numery telefonów i adresy e-mail wykorzystywane podczas korzystania z
                                        usług Grupy OLX Sp. z o.o. Wyrażoną zgodę można wycofać lub ograniczyć w dowolnej chwili za pomocą odpowiednich ustawień konta lub
                                        zgłaszając nam takie żądanie.</p>
                                </label>
                                <button className={`${styles.registerButton} ${errors.password || errors.email ? styles.disabled : ''}`} disabled={errors.password || errors.email ? true : false}>Załóż konto</button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Registration;