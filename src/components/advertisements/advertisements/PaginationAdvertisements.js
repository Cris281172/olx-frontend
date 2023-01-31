import {useEffect, useState} from 'react'
import callToAPI from "../../../api";
import pagination from "../../../helpers/pagination";
import styles from './PaginationAdvertisements.module.scss'
const PaginationAdvertisements = ({setAdvertisements}) => {
    const[numberOfPages, setNumberOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const getFromApi = () => {
        callToAPI(`/advertisement?type=all`, 'get')
            .then(res => {
                setNumberOfPages(res.pages)
                setAdvertisements(res.advertisements)
            })
    }
    const changePage = (page) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        console.log(page);
        setCurrentPage(page)
    }

    useEffect(() => {
        getFromApi()
    }, [currentPage]);
    return(
        <div className={styles.paginationAdvertisements}>
            <span>A</span>
            <ul className={styles.pageButtons}>
                {pagination(numberOfPages).map((page, index) => <li className={styles.paginationItem} key={index}><button onClick={e => changePage(page)}>{page}</button></li>)}
            </ul>
            <span>B</span>
        </div>
    )
}

export default PaginationAdvertisements;