import styles from './YourAccountNavtigation.module.scss';
import {Link} from 'react-router-dom'

const YourAccountNavigation = () => {
    return(
        <>
            <h5 className={styles.yourAccount}>Twoje konto</h5>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} to="">Ogłoszenia</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to="">Wiadomości</Link>
                </li>
                <li className={styles.item}>
                    <Link className={styles.link} to="">Ustawienia</Link>
                </li>
            </ul>
            <h5 className={styles.yourAccount}>Obserwowane</h5>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link className={styles.link} to="">Ogłoszenia</Link>
                </li>
            </ul>
            <ul className={`${styles.list} ${styles.logout}`}>
                <li className={styles.item}>
                    <Link className={styles.link} to="">Wyloguj</Link>
                </li>
            </ul>
        </>
    )
}

export default YourAccountNavigation;