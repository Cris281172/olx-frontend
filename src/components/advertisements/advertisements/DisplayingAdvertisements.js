import DisplayingAdvertisement from "./DisplayingAdvertisement";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import styles from './DisplayingAdvertisements.module.scss';
import callToAPI from "../../../api";
const DisplayingAdvertisements = ({setAdvertisements, advertisements}) => {

    const[advertisementsWithCategory, setAdvertisementsWithCategory] = useState([]);
    const params = useParams();
    useEffect(() => {
        callToAPI('/advertisement?type=all', 'get')
            .then(res => setAdvertisements(res.advertisements))
        // (`http://localhost:8080/category/${params.id}/advertisements`, {
        //     method: "GET",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(res => res.json())
        //     .then(res => setAdvertisementsWithCategory(res));
    }, [])
    return(
        <div className={styles.displayingAdvertisements}>
            <div className={styles.container}>
                <h2 className={styles.title}>Znaleźliśmy ponad 1000 ogłoszeń</h2>
                {advertisementsWithCategory.length === 0 &&
                <div>{advertisements.map(advertisement => <DisplayingAdvertisement key={advertisement._id} id={advertisement._id} title={advertisement.title} category={advertisement.categoryName} description={advertisement.description} location={advertisement.location} price={advertisement.price} createdTime={advertisement.createdTime} />)}</div>
                }
                {/*{advertisementsWithCategory &&*/}
                {/*<div>{advertisementsWithCategory.map(advertisement => <DisplayingAdvertisement key={advertisement._id} id={advertisement._id} title={advertisement.title} category={advertisement.categoryName} description={advertisement.description} location={advertisement.location} price={advertisement.price} createdTime={advertisement.createdTime} />)}</div>*/}
                {/*}*/}
            </div>
        </div>
    )
}

export default DisplayingAdvertisements;