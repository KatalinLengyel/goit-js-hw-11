import axios from "axios";

const API_KEY = "";
const BASE_URL = "";

export const fetchImages = async (query, page = 1) => {
    const response = await axios.get(`${BASE_URL}`, {
        params: {
            key: API_KEY}
    })
    
}