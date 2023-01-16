import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';
import SearchEngine from "../../homepage/search-engine/SearchEngine";
import styles from './ChosenAdvertisement.module.scss'
import MainInformation from "./MainInformation";
import callToAPI from "../../../api";

const ChosenAdvertisement = () => {
    const params = useParams();
    const[advertisement, setAdvertisement] = useState({});
    useEffect(() => {
        callToAPI(`/advertisement/${params.id}`, 'get')
            .then(res => setAdvertisement(res));
    }, [])
    return(
        <div className={styles.chosenAdvertisement}>
            <div className={styles.chosenAdvertisementWrapper}>
                <SearchEngine  />
                <MainInformation title={advertisement.title} price={advertisement.price} createdTime={advertisement.createdTime} description={advertisement.description} id={advertisement._id}/>
            </div>

        </div>
    )
}

export default ChosenAdvertisement;