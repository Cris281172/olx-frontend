import styles from './FooterBusinessPartner.module.scss'
import {Link} from 'react-router-dom'

const FooterBusinessPartner = () => {
    return(
        <footer className={styles.footerBusinessPartner}>
            <img src="https://static.olx.pl/static/olxpl/packed/font/2fbd23c39bff0aee6c0c84aaf60e66347d.svg" alt="image" />
            <div className={styles.textWrapper}>
                <h5 className={styles.standOut}>Wyróżnij się jako firma!</h5>
                <h4 className={styles.postOffer}>Poznaj ofertę OLX dla biznesu</h4>
            </div>
            <Link to="" className={styles.seeMore}>Zobacz szczegóły</Link>
        </footer>
    )
}

export default FooterBusinessPartner;