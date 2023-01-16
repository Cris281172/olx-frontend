import styles from "./AdvertisementName.module.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import callToAPI from "../../../api";
const AdvertisementName = () => {
    const[numberOfAdvertisements, setNumberOfAdvertisements] = useState(0);
    const[urlLocation, setUrlLocation] = useState('')
    let advertisementName = (numberOfAdvertisements < 5) ? ' ogłoszenia' :' ogłoszeń';
    const location = useLocation();
    useEffect(() => {
        callToAPI('/advertisement', 'get')
            .then(res => setNumberOfAdvertisements(res.length))
        setUrlLocation(location.pathname)
    }, [])
    return(
        <label className={styles.inputTextLabel}>
            <AiOutlineSearch className={styles.icon} />
            <input className={styles.input} type="text" placeholder={urlLocation === '/' ? numberOfAdvertisements + advertisementName : 'Znajdź coś dla siebie'}/>
        </label>
    )
}

export default AdvertisementName;