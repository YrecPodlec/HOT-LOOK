import axios from "axios";

export const CollectionsItems = {
    async getAll(){
        const response = await axios.get("http://localhost:3000/collections")
        return response.data
    }
}