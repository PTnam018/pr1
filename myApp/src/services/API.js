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

export function createPost(title, content, image) {
    return axios.post(`${API_BASE_URL}/createPost`, null, {
        params: {
            title: title,
            content: content,
            image: image,
        }
    });
}


export function getAllPost() {
    return axios.get(`${API_BASE_URL}/getAllPost`);
}

export function getPostByPostId(postId) {
    return axios.post(`${API_BASE_URL}/getPostByPostId`, null, {
        params: {
            postId: postId
        }
    });
}

export function updatePost(title, content, image, postId) {
    return axios.post(`${API_BASE_URL}/updatePost`, null, {
        params: {
            title: title,
            content: content,
            image: image,
            postId: postId
        }
    });
}

export function deletePost(postId) {
    return axios.post(`${API_BASE_URL}/deletePost`, null, {
        params: {
            postId: postId
        }
    });
}