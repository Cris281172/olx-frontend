import styles from './SearchButton.module.scss'
import {AiOutlineSearch} from "react-icons/ai";
const SearchButton = () => {
    return(
        <button className={styles.searchButton}>
            <span className={styles.searchButtonSpan}>Szukaj</span>
            <AiOutlineSearch className={styles.icon} />
        </button>
    )
}

export default SearchButton;