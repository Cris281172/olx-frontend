import styles from './PromotedAdvertisement.module.scss';
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import useDate from "../../../hooks/useDate";
const PromotedAdvertisement = ({advertisement}) => {
    const date = useDate(advertisement.createdTime);
    return(
        <div className={styles.advertisement}>
            <Link to={`/ogloszenie/${advertisement._id}`}>
                <div className={styles.image}></div>
            </Link>
            <Link to={`/ogloszenie/${advertisement._id}`}>
                <h3 className={styles.titleAdvertisement}>{advertisement.title}</h3>
            </Link>

            <p className={styles.information}>{advertisement.location} - {date}</p>
            <div className={styles.priceFavoriteWrapper}>
                <h4 className={styles.price}>{advertisement.price} zł</h4>
                <AiOutlineHeart />
            </div>
        </div>
    )
}

export default PromotedAdvertisement;