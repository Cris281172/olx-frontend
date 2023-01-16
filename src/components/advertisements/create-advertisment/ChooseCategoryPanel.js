import styles from './ChooseCategoryPanel.module.scss';
import { AiOutlineClose } from "react-icons/ai";
import {useEffect, useState} from "react";
import callToAPI from "../../../api";

const ChooseCategoryPanel = ({setChosenCategory, setChooseCategoryPanel}) => {
    const[categories, setCategories] = useState([])
    useEffect(() => {
        callToAPI('/categories', 'get')
            .then(res => setCategories(res))
    }, [])
    return(
        <div className={styles.chooseCategoryPanel}>
            <div className={styles.chooseCategory}>
                <AiOutlineClose className={styles.closeIcon} onClick={() => setChooseCategoryPanel(false)} />
                <h4 className={styles.title}>Wybierz kategorię</h4>
                <ul className={styles.categories}>
                    {categories.map(category => {
                        return(
                            <li key={category._id} className={styles.category} onClick={() => {
                                setChooseCategoryPanel(false)
                                setChosenCategory(category._id)
                            }
                            }>
                                <div className={styles.circle}></div>
                                <span className={styles.categoryName}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ChooseCategoryPanel;