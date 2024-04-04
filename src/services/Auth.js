import Client from "./index";

export const signInUser = async (data) => {
    try {
        const res = await Client.post('/auth/login', data)
        if (res.data.token) {
            return { user: res.data.user, token: res.data.token }
        } else {
            throw new Error('Token not received in response');
        }
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
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found in localStorage');
        }

        const res = await Client.get('/auth/session', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        throw error
    }
}