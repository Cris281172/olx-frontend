import styles from './SearchButton.module.scss'
import {AiOutlineSearch} from "react-icons/ai";
import {Link} from 'react-router-dom'
const SearchButton = () => {
    return(
        <Link to="/ogloszenia">
            <button className={styles.searchButton}>
                <span className={styles.searchButtonSpan}>Szukaj</span>
                <AiOutlineSearch className={styles.icon} />
            </button>
        </Link>
    )
}

export default SearchButton;