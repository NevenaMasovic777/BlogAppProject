import React, { useState, createContext } from "react";
import { addPost, deletePost, editPost, getAllCategories, getAllPosts, getPostsByCategory } from "../service/service";

export const BlogContext = createContext();

export const BlogProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await getAllPosts();
        setPosts(res.data.resultData);
    }

    const edit = async (idCategory, id, post) => {
        await editPost(id, post)
        idCategory ? requestPostsByCategory(post.categoryId) :getPosts()
    }

    const add = async (categoryId, post) => {
        const res = await addPost(post);
        console.log(res);
        categoryId ? requestPostsByCategory(categoryId) : getPosts()
    }

    const requestPostsByCategory = async (id) => {
        const res = await getPostsByCategory(id);
        console.log(res.data.resultData);
        setPosts(res.data.resultData)
    }

    const deleteSinglePost = async (e, idCategory, postId) => {
        e.preventDefault();
        await deletePost(postId);
        idCategory ? requestPostsByCategory(idCategory) : getPosts();
    }
    
    //categories

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const res = await getAllCategories();
        setCategories(res.data.resultData)
        console.log(res.data.resultData)
    }

    return(
        <BlogContext.Provider value={{posts, setPosts, getPosts, edit, add, requestPostsByCategory, deleteSinglePost, categories, getCategories}}>{props.children}</BlogContext.Provider>
    );
}


// export default PostContext;