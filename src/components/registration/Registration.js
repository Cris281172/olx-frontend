import {useState} from "react";
import callToAPI from '../../api'

const Registration = () => {
    const[emailValue, setEmailValue] = useState('');
    const[passwordValue, setPasswordValue] = useState('');
    console.log();
    const registration = async e => {
        e.preventDefault();
        await callToAPI('/register', 'post', {
            email: emailValue,
            password: passwordValue,
        })
    }

    return(
        <div>
            <h2>Rejestracja</h2>
            <form onSubmit={registration}>
                <div>
                    <h3>Email</h3>
                    <input onChange={e => setEmailValue(e.target.value)} value={emailValue} />
                </div>
                <div>
                    <h3>Hasło</h3>
                    <input onChange={e => setPasswordValue(e.target.value)} value={passwordValue} />
                </div>
                <button>Rejestruj</button>
            </form>
        </div>
    )
}

export default Registration;