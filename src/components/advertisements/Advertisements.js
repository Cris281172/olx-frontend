import Advertisement from "./Advertisement";
import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

const Advertisements = () => {
    const[advertisements, setAdvertisements] = useState([])
    const[advertisementsWithCategory, setAdvertisementsWithCategory] = useState([]);
    const params = useParams();
    useEffect(() => {
        fetch('http://localhost:8080/advertisement', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setAdvertisements(res))
        fetch(`http://localhost:8080/category/${params.id}/advertisements`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setAdvertisementsWithCategory(res));
    }, [])
    return(
        <div>
            <h2>Ogłoszenia</h2>
            {advertisementsWithCategory.length === 0 &&
                <div>{advertisements.map(advertisement => <Advertisement key={advertisement._id} id={advertisement._id} title={advertisement.title} category={advertisement.categoryName} description={advertisement.description}  location={advertisement.location} price={advertisement.price} createdTime={advertisement.createdTime} />)}</div>
            }
            {advertisementsWithCategory &&
                <div>{advertisementsWithCategory.map(advertisement => <Advertisement key={advertisement._id} id={advertisement._id} title={advertisement.title} category={advertisement.categoryName} description={advertisement.description}  location={advertisement.location} price={advertisement.price} createdTime={advertisement.createdTime} />)}</div>
            }
        </div>
    )
}

export default Advertisements;