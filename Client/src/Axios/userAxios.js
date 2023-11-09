import axios from 'axios';

const userAxios = axios.create({
    baseURL: 'http://localhost:3000/'
})

export default userAxios