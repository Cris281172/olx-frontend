import {useState} from 'react'
import callToAPI from '../../api'
import {Link} from 'react-router-dom';
import locationHref from "../../helpers/locationHref";

const Login = () => {
    const[emailValue, setEmailValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    const[sendLoginStatus, setSendLoginStatus] = useState(false);

    const loginForm = async e => {
        e.preventDefault();

       callToAPI('/login', 'post', {
           email: emailValue,
           password: passwordValue,
       })
           .then(res => {
               const now = new Date();
               now.setTime(now.getTime() + 1000 * 60 * 60);

               document.cookie = `token=${res.token};expires=${now.toUTCString()};path=/`;
               locationHref('/')
           })
           .catch(err => {
               setSendLoginStatus(true);
           })


    }

    return(
        <div>
            <h2>Logowanie</h2>
            <form onSubmit={loginForm}>
                <div>
                    <h3>Email</h3>
                    <input onChange={e => setEmailValue(e.target.value)} value={emailValue} />
                </div>
                <div>
                    <h3>Hasło</h3>
                    <input onChange={e => setPasswordValue(e.target.value)} value={passwordValue} />
                </div>
                <button>Zaloguj</button>
            </form>
            <Link to="/reset">Forgot password</Link>
            {sendLoginStatus && <h3>Invalid password or email!</h3>}
        </div>
    )
}

export default Login;