import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertPost = payload => api.post(`/post`, payload)
export const getAllPosts = () => api.get(`/posts`)
export const updatePostById = (id, payload) => api.put(`/post/${id}`, payload)
export const deletePostById = id => api.delete(`/post/${id}`)
export const getPostById = id => api.get(`/post/${id}`)

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

const apis = {
    insertPost,
    getAllPosts,
    updatePostById,
    deletePostById,
    getPostById,

    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis
