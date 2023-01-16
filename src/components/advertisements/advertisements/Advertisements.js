import SearchEngine from "../../homepage/search-engine/SearchEngine";
import DisplayingAdvertisements from "./DisplayingAdvertisements";
import PaginationAdvertisements from "./PaginationAdvertisements";
import {useState} from "react";

const Advertisements = () => {
    const[advertisements, setAdvertisements] = useState([])
    return(
        <>
            <SearchEngine />
            <DisplayingAdvertisements advertisements={advertisements} setAdvertisements={setAdvertisements} />
            <PaginationAdvertisements setAdvertisements={setAdvertisements} />
        </>
    )
}

export default Advertisements;