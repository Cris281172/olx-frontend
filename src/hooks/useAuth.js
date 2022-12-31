import {useState, useEffect} from 'react';

const useAuth = () => {
    const[isAuth, setIsAuth] = useState(false);

    const getToken = () => {
        const partsOfCookies = document.cookie.split('; token=');
        const tokenValue = partsOfCookies[1];
        setIsAuth(!!tokenValue);
    }

    useEffect(() => {
        setInterval(getToken, 1000);
    }, []);

    return isAuth;
}

export default useAuth;