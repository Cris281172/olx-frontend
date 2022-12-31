import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './ListOfCategories.module.scss'

const ListOfCategories = () => {
    const[categories, setCategories] = useState([]);
     useEffect(() => {
        fetch('http://localhost:8080/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setCategories(res))
    }, [])
    return(
        <ul className={styles.categoriesList}>
            {categories.map(category => {
                return(
                    <li key={category._id} className={styles.category}>
                        <Link to={`/advertisements/category/${category._id}`} className={styles.categoryLink}>
                            <div className={styles.circle} />
                            <span className={styles.categoryName}>{category.name}</span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default ListOfCategories;