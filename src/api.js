import axios from "axios";
import cookies from "js-cookie";
import { TOKEN } from "./app.constants";

const BASE_API = `${import.meta.env.VITE_SERVER_URL}/api`

export const $axios = axios.create({
    baseURL: BASE_API,
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${cookies.get(TOKEN)}`
    },
})