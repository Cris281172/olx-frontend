import styles from './Cookie.module.scss'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import addToLocalStorage from "../../helpers/addToLocalStorage";
import getValueFromLocalStorage from "../../helpers/getValueFromLocalStorage";
const Cookie = () => {
    const[cookieVisible, setCookieVisible] = useState(false)
    const cookieKey = getValueFromLocalStorage('cookieAccept');
    const acceptCookie = () => {
        setCookieVisible(false);
        addToLocalStorage('cookieAccept', true)
    }
    useEffect(() => {
       if(cookieKey){
           setCookieVisible(false);
       }
       else{
           setCookieVisible(true);
       }
    }, [])
    return(
        <>
            {cookieVisible &&
            <div className={styles.cookieWrapper}>
                <div className={styles.cookie}>
                    <div className={`${styles.section} ${styles.privacy}`}>
                        <h4 className={styles.title}>Dbamy o Twoją prywatność</h4>
                        <p className={styles.text}>Wraz z naszymi partnerami przechowujemy i/lub uzyskujemy dostęp do informacji w urządzeniu, takich jak unikatowe identyfikatory w plikach cookie,
                            w celu przetwarzania danych osobowych. Klikając poniżej, użytkownik może zaakceptować wybór lub nim zarządzać, w tym ma prawo do sprzeciwu w
                            przypadku występowania prawnie uzasadnionych interesów lub w dowolnym momencie na stronie polityki prywatności. Te wybory zostaną przekazane
                            naszym partnerom i nie będą miały wpływu na dane przeglądarki.</p>
                    </div>
                    <div className={`${styles.section} ${styles.partners}`}>
                        <h5 className={styles.title}>My oraz nasi partnerzy przetwarzamy dane, aby zapewnić:</h5>
                        <p className={styles.text}>Użycie dokładnych danych geolokalizacyjnych. Aktywne skanowanie charakterystyki urządzenia do celów identyfikacji.
                            Wybór spersonalizowanych treści. Wybór spersonalizowanych reklam. Tworzenie profilu spersonalizowanych reklam. Przechowywanie informacji na urządzeniu
                            lub dostęp do nich. Wybór podstawowych reklam. Pomiar wydajności reklam. Stosowanie badań rynkowych w celu generowania opinii odbiorców. Opracowywanie
                            i ulepszanie produktów. Spersonalizowane reklamy i treści, pomiar reklam i treści, opinie odbiorców, rozwój produktu. </p>
                        <Link className={styles.listOfPartners} to="/">Lista partnerów ( dostawców )</Link>
                    </div>
                    <div className={styles.buttonsWrapper}>
                        <button className={`${styles.button} ${styles.accept}`} onClick={acceptCookie}>Akceptuję</button>
                        <button className={`${styles.button} ${styles.showGoals}`}>Pokaż cele</button>
                    </div>
                </div>
            </div>
            }

        </>
    )
}

export default Cookie;