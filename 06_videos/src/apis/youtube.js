import axios from 'axios';

const KEY = "AIzaSyDY1eSQmk-Lse1qp1pvKcOMdnQUqkVb58M";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})