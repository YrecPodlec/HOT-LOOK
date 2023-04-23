import axios from "axios";

export const CollectionsItems = {
    async getAll(){
        const response = await axios.get("http://localhost:3500/collections")
        return response.data
    }
}