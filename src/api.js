const BASE_URL = 'http://localhost:8080'

const callToAPI = async (url, method = 'get', body = null) => {
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    if(body){
        config.body = JSON.stringify(body);
    }

    const response = await fetch(BASE_URL + url, config);
    const data = await response.json();
    return await data;
}

export default callToAPI;


