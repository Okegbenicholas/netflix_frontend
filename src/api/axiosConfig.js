import axios from 'axios';

export default axios.create({
    baseURL:'http://32.197.13.162:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
