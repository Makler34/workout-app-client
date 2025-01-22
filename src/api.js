import axios from "axios";
import cookies from "js-cookie";
import { TOKEN } from "./app.constants";

const BASE_API = 'http://localhost:5000/api'

export const $axios = axios.create({
    baseURL: BASE_API,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${cookies.get(TOKEN)}`
    },
})