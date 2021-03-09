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
export const getUserByEmail = email => api.get(`/userEmail/${email}`)

export const insertMessage = payload => api.post(`/message`, payload)
export const getAllMessages = () => api.get(`/messages`)
export const updateMessageById = (id, payload) => api.put(`/message/${id}`, payload)
export const deletMessageById = id => api.delete(`/message/${id}`)
export const getMessageById = id => api.get(`/message/${id}`)
export const getMessageByEmail = email => api.get(`/messageEmail/${email}`)

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
    getUserByEmail,

    insertMessage,
    getAllMessages,
    updateMessageById,
    deletMessageById,
    getMessageById,
    getMessageByEmail,
}

export default apis
