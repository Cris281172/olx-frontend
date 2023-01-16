import styles from './YourAccountTooltip.module.scss'
import YourAccountNavigation from "./YourAccountNavigation";

const YourAccountTooltip = () => {
    return(
        <div className={styles.yourAccountTooltip}>
            <div className={styles.userBox}>
                <div className={styles.circle}></div>
                <div className={styles.information}>
                    <h3 className={styles.name}>Krzysztof Juczyński</h3>
                    <h4 className={styles.id}>id: 330932037</h4>
                </div>
            </div>
            <YourAccountNavigation />
        </div>
    )
}

export default YourAccountTooltip;