import {useState, useEffect} from 'react';

const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    const setAuthToken = () => setIsAuth(document.cookie.split('; token=')[0] !== "")

    useEffect(() => {
        setAuthToken();
        const interval = setInterval(setAuthToken, 1000);
        return () => clearInterval(interval)
    }, []);

    return isAuth;
}


export default useAuth;