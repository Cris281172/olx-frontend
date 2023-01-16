import {Link} from 'react-router-dom'
import styles from './MainNav.module.scss';
import olxLogo from '../images/olx-logo.svg'
import { HiOutlineChatBubbleOvalLeft, HiOutlineUser } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import {useState, useEffect} from 'react';
import YourAccountTooltip from "../components/homepage/navigation/your-account-panel/YourAccountTooltip";
import useAuth from "../hooks/useAuth";
const MainNav = () => {
    const auth = useAuth();
    const[visibleOfYourAccountTooltip, setVisibleOfYourAccountTooltip] = useState(false)
    const showYourAccountTooltip = () => {
        setVisibleOfYourAccountTooltip(true);
    }
    const hiddenYourAccountTooltip = () => {
        setVisibleOfYourAccountTooltip(false);
    }

    return(
        <div className={styles.mainNavWrapper}>
            <nav className={styles.mainNav}>
                <ul className={styles.navList}>
                    <li className={styles.item}>
                        <Link to="/">
                            <img className={styles.logo} src={olxLogo} alt="Olx Logo" />
                        </Link>
                    </li>
                    <div className={styles.rightNav}>
                        <li className={styles.item}>
                            <Link to="" className={styles.link}>
                                <HiOutlineChatBubbleOvalLeft className={styles.icon} />
                                <span className={styles.text}>Wiadomości</span>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="" className={styles.link}>
                                <AiOutlineHeart className={styles.icon} />
                            </Link>
                        </li>
                        <li className={styles.item} onMouseOver={showYourAccountTooltip} onMouseOut={hiddenYourAccountTooltip}>
                            <Link to="/logowanie" className={styles.link}>
                                <HiOutlineUser className={styles.icon} />
                                <span className={styles.text}>Twoje konto</span>
                                <IoIosArrowDown className={`${styles.icon} ${styles.arrow}`} />
                            </Link>
                            {visibleOfYourAccountTooltip && <YourAccountTooltip  />}
                        </li>
                        <li className={styles.item}>
                            <Link to={auth ? '/nowe-ogloszenie' : '/logowanie'} className={`${styles.link} ${styles.createAdvertisement}`}>
                                <span className={styles.text}>Dodaj ogłoszenie</span>
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default MainNav;