import {$host} from "./index.jsx";

export const AllCollections = async () => {
    const {data} = await $host.get('/collections/')
    return data
}

export const OneCollection = async (id) => {
    const {data} = await $host.get('/collections/' + id)
    return data
}