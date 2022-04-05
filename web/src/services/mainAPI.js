import axios from 'axios';

const token = localStorage.getItem('tk');

const origin = window.location.origin;
const base = `http://localhost:${4200}`;


const mainApi = axios.create({
    baseURL: base,
    headers: {
        'authorization': token===null ? '' : token.toString(),
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
    }
});

export default mainApi;