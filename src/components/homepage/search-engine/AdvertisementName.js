import styles from "./AdvertisementName.module.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {useEffect, useState} from 'react'

const AdvertisementName = () => {
    const[numberOfAdvertisements, setNumberOfAdvertisements] = useState(0);
    let advertisementName = (numberOfAdvertisements < 5) ? ' ogłoszenia' :' ogłoszeń';
    useEffect(() => {
        fetch('http://localhost:8080/advertisement', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setNumberOfAdvertisements(res.length))
    })
    return(
        <label className={styles.inputTextLabel}>
            <AiOutlineSearch className={styles.icon} />
            <input className={styles.input} type="text" placeholder={numberOfAdvertisements + advertisementName}/>
        </label>
    )
}

export default AdvertisementName;