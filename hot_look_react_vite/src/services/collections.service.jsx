import axios from "axios";

export const CollectionsItems = {
    async getAll(){
        const response = await axios.get("https://server-hot-lok.onrender.com/collections")
        return response.data
    }
}