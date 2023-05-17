import axios from "axios";

const $host = axios.create({
    baseURL: 'https://hotlookserver.onrender.com'
})

export {
    $host
}