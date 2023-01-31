import styles from './NavigationPanel.module.scss'
import {Link} from 'react-router-dom'
const NavigationPanel = ({panel}) => {
    return(
        <nav className={styles.navigationPanel}>
            <Link to="/logowanie" className={`${styles.link} ${panel === 'login' ? styles.active : ""}`}>Zaloguj się</Link>
            <Link to="/rejestracja" className={`${styles.link} ${panel === 'registration' ? styles.active : ""}`}>Załóż konto</Link>
        </nav>
    )
}

export default NavigationPanel