import styles from './OlxInformationFooter.module.scss'
import { AiFillFacebook, AiOutlineYoutube, AiFillLinkedin } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import { BsPinterest } from "react-icons/bs";
const OlxInformationFooter = () => {
    return(
        <footer className={styles.olxInformationFooter}>
            <img src="https://static.olx.pl/static/olxpl/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="OLX logo" />
            <p className={styles.informationText}>
                OLX.pl to darmowe ogłoszenia lokalne w kategoriach: Moda, Zwierzęta, Dla Dzieci, Sport i Hobby, Muzyka i Edukacja. Szybko znajdziesz tu ciekawe ogłoszenia i łatwo skontaktujesz się z
                ogłoszeniodawcą. Na OLX.pl czeka na Ciebie praca biurowa, mieszkania, pokoje, samochody. Jeśli chcesz coś sprzedać - w prosty sposób dodasz bezpłatne ogłoszenia. Chcesz coś kupić -
                tutaj znajdziesz ciekawe okazje, taniej niż w sklepie. Sprzedawaj po sąsiedzku na OLX.pl
            </p>
            <div className={styles.socialsIcons}>
                <AiFillFacebook className={styles.icon} />
                <ImInstagram className={styles.icon} />
                <AiOutlineYoutube className={styles.icon} />
                <AiFillLinkedin className={styles.icon} />
                <BsPinterest className={styles.icon} />
            </div>
        </footer>
    )
}

export default OlxInformationFooter;