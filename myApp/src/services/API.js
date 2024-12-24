import axios from 'axios'

const API_BASE_URL = process.env.NODE_ENV === 'production' ? "https://web-20232.onrender.com" : "http://localhost:5001";


export function register(email, password) {
    return axios.post(`${API_BASE_URL}/register`, {
        email: email,
        password: password
    })
}

export function login(email, password) {
    return axios.post(`${API_BASE_URL}/login`, {
        email: email,
        password: password
    })
}
