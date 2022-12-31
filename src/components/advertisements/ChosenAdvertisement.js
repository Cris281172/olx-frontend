import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react';


const ChosenAdvertisement = () => {
    const params = useParams();
    const[advertisement, setAdvertisement] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/advertisement/${params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setAdvertisement(res));
    }, [])
    return(
        <div>
            <h3>{advertisement.title}</h3>
            <h3>{advertisement.categoryName}</h3>
            <h3>{advertisement.description}</h3>
            <h3>{advertisement.location}</h3>
            <h3>{advertisement.price}zł</h3>
            <h3>{new Date(advertisement.createdTime).toLocaleString()}</h3>
        </div>
    )
}

export default ChosenAdvertisement;