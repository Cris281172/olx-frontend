import {useState} from 'react';
import callToAPI from '../api'

const ResetPassword = () => {
    const[emailValue, setEmailValue] = useState('');
    const[sendEmailStatus, setSendEmailStatus] = useState(false);

    const resetPasswordForm = async e => {
        e.preventDefault();
        await callToAPI('/reset', 'post', {
            email: emailValue,
        });
        setSendEmailStatus(true);
    }

    return(
        <div>
            <h2>Zapomniałem hasła</h2>
            <form onSubmit={resetPasswordForm}>
                <h3>Podaj email</h3>
                <input onChange={e => setEmailValue(e.target.value)} value={emailValue} />
                <button>Zatwierdź</button>
            </form>
            {sendEmailStatus && <h3>fasd</h3>}
        </div>
    )
}

export default ResetPassword