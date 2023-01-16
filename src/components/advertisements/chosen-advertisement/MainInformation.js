import styles from './MainInformation.module.scss'
import useDate from "../../../hooks/useDate";
const MainInformation = ({title, price, createdTime, description, id}) => {
    return(
        <div className={styles.mainInformation}>
            {/*<h5 className={styles.createdTime}>Dodane {useDate(createdTime)}</h5>*/}
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.price}>{price} zł</h3>
            <div className={styles.description}>
                <h3 className={styles.descriptionTitle}>Opis</h3>
                <p className={styles.text}>{description}</p>
            </div>
            <div className={styles.bottomContent}>
                <span>ID: {id}</span>
            </div>
        </div>
    )
}

export default MainInformation;