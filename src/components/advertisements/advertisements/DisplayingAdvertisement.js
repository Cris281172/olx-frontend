import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './DisplayingAdvertisement.module.scss'
import useDate from "../../../hooks/useDate";

const DisplayingAdvertisement = ({id, title, category, description, location, price, createdTime}) => {
    const date = useDate(createdTime);
    return(
        <Link to={`/ogloszenie/${id}`} className={styles.link}>
            <li className={styles.item}>
                <div className={styles.image} />
                <div className={styles.informationWrapper}>
                    <div className={styles.topPanel}>
                        <h6 className={styles.title}>{title}</h6>
                        <p className={styles.price}>{price} zł</p>
                    </div>
                    <div className={styles.bottomPanel}>
                        <p className={styles.locationAndDate}>{location} - {date}</p>

                    </div>
                </div>
            </li>
        </Link>
    )
}

export default DisplayingAdvertisement;