import axios from "./axios"

export const register =  async (fullname, username, password) => {
    try {
        const response = await axios.post('/api/register', JSON.stringify({
            fullname,
            username,
            password
        }))

        return response
    } catch (error) {
        throw error
    }
}
export const login =  async (username, password) => {
    try {
        const response = await axios.post('/api/login', JSON.stringify({
            username,
            password
        }))

        return response
    } catch (error) {
        throw error
    }
}

