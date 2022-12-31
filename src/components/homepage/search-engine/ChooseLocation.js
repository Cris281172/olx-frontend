import styles from './ChooseLocation.module.scss'
import { IoLocationOutline } from "react-icons/io5";
const ChooseLocation = () => {
    return(
        <label className={styles.inputChooseLocation}>
            <IoLocationOutline className={styles.icon} />
            <select className={styles.select}>
                <option>Cała Polska</option>
            </select>
        </label>
    )
}

export default ChooseLocation;