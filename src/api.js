const BASE_URL = 'https://olx-backend.onrender.com'

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
    console.log(data);
    return await data;
}

export default callToAPI;


