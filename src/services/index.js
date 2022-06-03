import axios from "axios";
import { config } from "dotenv";

export const BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost:3001/api' : 'https://server-inventory-app.herokuapp.com/api'
console.log(BASE_URL, `This is ${BASE_URL}`)
const Client = axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
            config.headers['access-control-allow-origin'] = '*'
        }
        return config;
    }
    (error) => Promise.reject(error)
)

export default Client