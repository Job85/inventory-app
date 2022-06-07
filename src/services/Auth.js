import Client from "./index";

export const signInUser = async (data) => {
    try {
        const res = await Client.post('/auth/login', data)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const registerUser = async (data) => {
    try {
        const res = await Client.post('/auth/register', data)
        return res.data
    } catch (error) {
        throw error
    }
}

export const checkSession = async () => {
    try {
        const res = await Client.get('/auth/session')
        return res.data
    } catch (error) {
        throw error
    }
}