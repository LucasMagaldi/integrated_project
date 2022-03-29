import axios from 'axios';

const origin = window.location.origin;
const base = `http://localhost:${4200}`;

const mainApi = axios.create({
    baseURL: base,
    headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
    }
});

export default mainApi;