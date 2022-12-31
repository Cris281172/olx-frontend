import styles from './Categories.module.scss'
import ListOfCategories from "../../categories/ListOfCategories";

const Categories = () => {
    return(
        <div className={styles.categories}>
            <h2 className={styles.title}>Kategorie główne</h2>
            <ListOfCategories />
        </div>
        )

}

export default Categories;