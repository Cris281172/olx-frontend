import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './ListOfCategories.module.scss'
import callToAPI from "../../api";
const ListOfCategories = () => {
    const[categories, setCategories] = useState([]);
     useEffect(() => {
        callToAPI('/categories', 'get')
            .then(res => setCategories(res))
    }, [])
    return(
        <ul className={styles.categoriesList}>
            {categories.map(category => {
                return(
                    <li key={category._id} className={styles.category}>
                        <Link to={`/ogloszenia/kategoria/${category._id}`} className={styles.categoryLink}>
                            <div className={styles.circle} />
                            <span className={styles.categoryName}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListOfCategories;