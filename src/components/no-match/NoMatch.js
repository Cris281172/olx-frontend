import styles from './NoMatch.module.scss'
import {Link} from 'react-router-dom';

const NoMatch = () => {
    return(
        <div className={styles.noMatch}>
            <h2 className={styles.errorStatus}>404</h2>
            <h3 className={styles.errorText}>Strona nie znaleziona</h3>
            <Link to="/" className={styles.homeLink}>Wróć do strony głównej</Link>
        </div>
    )
}

export default NoMatch;