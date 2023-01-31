import styles from './PromotedAdvertisements.module.scss'
import {useEffect, useState} from "react";
import PromotedAdvertisement from "../../advertisements/create-advertisment/PromotedAdvertisement";
import callToAPI from "../../../api";
const PromotedAdvertisements = () => {
    const[promotedAdvertisements, setPromotedAdvertisements] = useState([]);
    useEffect(() => {
        callToAPI('/advertisement?type=promoted', 'get')
            .then(res => setPromotedAdvertisements(res.advertisements))
    },[])


    return(
        <div className={styles.promotedAdvertisements}>
            <div className={styles.promotedAdvertisementsWrapper}>
                <h2 className={styles.title}>Ogłoszenia promowane</h2>
                <div className={styles.advertisements}>
                    {promotedAdvertisements.map(advertisement => <PromotedAdvertisement advertisement={advertisement} />)}
                </div>
            </div>
        </div>
    )
}

export default PromotedAdvertisements