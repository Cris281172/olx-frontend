import styles from './SearchEngine.module.scss'
import AdvertisementName from "./AdvertisementName";
import ChooseLocation from "./ChooseLocation";
import SearchButton from "./SearchButton";

const SearchEngine = () => {
    return(
        <div className={styles.searchEngine}>
            <form className={styles.form}>
                <AdvertisementName />
                <ChooseLocation />
                <SearchButton />
            </form>
        </div>
    )
}

export default SearchEngine;