import styles from './ChooseStatus.module.scss'
import{useEffect, useState} from 'react';
import callToAPI from "../../../api";

const ChooseStatus = ({setChooseStatusPanel, setChosenCondition}) => {
    const[conditions, setConditions] = useState([])
    useEffect(() => {
        callToAPI('/conditions', 'get')
            .then(res => setConditions(res));
    }, [])
    return(
        <ul className={styles.statusList}>
            {conditions.map(condition => <li className={styles.item} key={condition._id} onClick={() => {
                setChooseStatusPanel(false)
                setChosenCondition(condition._id);
            }
            }>{condition.name.charAt(0).toUpperCase() + condition.name.slice(1)}</li>)}
        </ul>
    )
}

export default ChooseStatus;