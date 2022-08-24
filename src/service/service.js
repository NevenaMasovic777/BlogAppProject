import axios from 'axios';

export const POSTS_BASE_URL = `https://frontend-api-test-nultien.azurewebsites.net/api/BlogPosts`
export const CATEGORY_BASE_URL = `https://frontend-api-test-nultien.azurewebsites.net/api/Category`
//posts

function getAllPosts() {
    return axios.get(
        `${POSTS_BASE_URL}`
    )
}

function getPostsByCategory(id) {
    return axios.get(
        `${POSTS_BASE_URL}/GetPostByCategory?categoryId=${id}`
    )
}

function addPost(body) {
    return axios.post(
        `${POSTS_BASE_URL}`, body
    )
}

function editPost(id, body) {
    return axios.put(
        `${POSTS_BASE_URL}/${id}`, body
    )
}

function deletePost(id) {
    return axios.delete(
        `${POSTS_BASE_URL}/${id}`
    )
}

function searchPostByTerm(term) {
    return axios.get(
        `${POSTS_BASE_URL}/Search?term=${term}`
    )
}

//categories

function getAllCategories() {
    return axios.get(
        `${CATEGORY_BASE_URL}`
    )
}

function getCategory(id) {
    return axios.get(
        `${CATEGORY_BASE_URL}/${id}`
    )
}

function addCategory(body) {
    return axios.post(
        `${CATEGORY_BASE_URL}`, body
    )
}

function deleteCategory(id) {
    return axios.delete(
        `${CATEGORY_BASE_URL}/${id}`
    )
}

export {
    getAllPosts,
    addPost,
    editPost,
    deletePost,
    searchPostByTerm,
    getCategory,
    getAllCategories,
    getPostsByCategory,
    addCategory,
    deleteCategory
}