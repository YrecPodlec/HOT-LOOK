import axios from "axios";

const instance = axios.create({
    baseURL: 'https://hotlookserver.onrender.com'
})

export default instance;