import axios from "axios";

// export const BASE_URL = process.env.NODE_ENV === 'local' ? 'http://localhost:3001/api' : 'https://server-inventory-app.herokuapp.com/api'
export const BASE_URL = 'http://localhost:3001/api'
console.log(BASE_URL, `This is ${BASE_URL}`)
const Client = axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        console.log('Token in Client:', token)
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        console.error('Error in request interceptor:', error);
        return Promise.reject(error);
    }
)

export default Client