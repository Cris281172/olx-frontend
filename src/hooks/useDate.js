import {useEffect, useState} from "react";

const useDate = (date) => {
    const[currentDate, setCurrentDate] = useState(new Date());
    const arrayOfMonths = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paz', 'lis', 'gru']
    useEffect(() => {
        const currentDateInterval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return () => clearInterval(currentDateInterval);
    }, []);
    const advertisementDate = new Date(date);
    const advertisementMonth = advertisementDate.getUTCMonth();
    const advertisementDay = advertisementDate.getUTCDay();
    const advertisementTime = advertisementDate.toLocaleString().split(',')[1].slice(0, 6)
    const actualDay = currentDate.getUTCDay();
    const actualMonth = currentDate.getUTCMonth();
    if(advertisementMonth === actualMonth && actualDay === advertisementDay){
        return `dzisiaj ${advertisementTime}`
    }
    else{
        return `${advertisementDay} ${arrayOfMonths[advertisementMonth]}`
    }
}

export default useDate;