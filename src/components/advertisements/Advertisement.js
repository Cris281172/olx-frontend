import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Advertisement = ({id, title, category, description, location, price, createdTime}) => {
    return(
        <li>
           <h3>{title}</h3>
            <h3>{category}</h3>
            {/*<h3>{description}</h3>*/}
            {/*<h3>{location}</h3>*/}
            <h3>{price}zł</h3>
            <h3>{new Date(createdTime).toLocaleString()}</h3>
            <Link to={`/advertisement/${id}`}>Wejdź w ogłoszenie</Link>
        </li>
    )
}

export default Advertisement;