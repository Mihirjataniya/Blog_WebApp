import axios from "axios"

//Blogs related apis
export const getAllBlogs = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog`)
        return response.data
    } catch (error) {
        throw new error(error.response.data.error)
    }
}

export const getBlogById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`)
        return response.data
    } catch (error) {
        throw new error(error.response.data.error)
    }
}

export const createBlog = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/blog`, data, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        console.log(error);
        throw new error(error.response.data.error)
    }
}

export const updateBlog = async (id,blogData) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`,blogData,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        throw new error(error.response.data.error)
    }
}

export const deleteBlog = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        throw new error(error.response.data.error)
    }
}


//User Related apis
export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/register`, data)
        return response.data
    } catch (error) {
        throw new error(error.response.data.error)
    }
}

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, data)
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.error);

    }
}

export const getUserBlogs = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/profile`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error(error.response.data.error);
    }
}