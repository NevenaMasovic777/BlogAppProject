import axios from 'axios';
import { 
    getAllPosts,
    getPostsByCategory,
    getAllCategories,
    addPost,
    editPost,
    deletePost,
    searchPostByTerm,
    getCategory,
    addCategory,
    deleteCategory,
    POSTS_BASE_URL,
    CATEGORY_BASE_URL } from '../service/service';

jest.mock("axios");

describe('Blog Service', () => {
    let id;
    beforeEach(() => {
        id = "1"
    });
    it('getAllPosts call should be successful', async () => {

        const resp = {
            success: true,
            resultData: [],
            errorMessage: null
        }

        axios.get.mockResolvedValueOnce(resp);

        const result = await getAllPosts();

        expect(axios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}`);
        expect(result).toEqual(resp);
    });

    it('getPostsByCategory call should be successful', async () => {
        const resp = {
            success: true,
            resultData: [],
            errorMessage: null
        }

        axios.get.mockResolvedValueOnce(resp);
        const result = await getPostsByCategory(id);

        expect(axios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/GetPostByCategory?categoryId=${id}`);
        expect(result).toEqual(resp);
    });

    it('addPost call should be successful', async () => {
        const body = {
            title: "blog post about board games another one",
            text: "board games",
            categoryId: 0
        }

        const resp = {
            id: 1,
            createdAt: "2022-08-24T21:37:04.3077398Z",
            updatedAt: "2022-08-24T21:37:04.3077398Z",
            title: "blog post about board games another one",
            text: "board games",
            categoryId: 0
        }

        axios.post.mockResolvedValueOnce(resp);
        const result = await addPost(body);

        expect(axios.post).toHaveBeenCalledWith(`${POSTS_BASE_URL}`, body);
        expect(result).toEqual(resp);

    });

    it('editPost call should be successful', async () => {
        const body = {
            id: 1,
            title: "blog post about board games another one",
            text: "board games",
            categoryId: 0
        }

        const resp = null;

        axios.put.mockResolvedValueOnce(resp);
        const result = await editPost(id, body);

        expect(axios.put).toHaveBeenCalledWith(`${POSTS_BASE_URL}/1`, body);
        expect(result).toEqual(resp)
    });

    it('deletePost should delete right post', async () => {
        const resp = null;

        axios.delete.mockResolvedValueOnce(resp);
        const result = await deletePost(id);

        expect(axios.delete).toHaveBeenCalledWith(`${POSTS_BASE_URL}/1`);
        expect(result).toEqual(resp)
    });

    it('searchByTerm call should be successful', async () => {
        const body = {
            term: "books"
        }

        const resp = {
            "success": true,
            "resultData": [],
            "errorMessage": null
        }

        axios.get.mockResolvedValueOnce(resp);

        const result = await searchPostByTerm(body.term);

        expect(axios.get).toHaveBeenCalledWith(`${POSTS_BASE_URL}/Search?term=${body.term}`);
        expect(result).toEqual(resp);
    });

    //categories
    it('getAllCategories call should be successful', async () => {

        const resp = {
            success: true,
            resultData: [
                {
                    id: 1,
                    createdAt: "2022-08-24T21:20:44.1039309Z",
                    updatedAt: "2022-08-24T21:20:44.1039309Z",
                    name: "game"
                },
                {
                    id: 2,
                    createdAt: "2022-08-24T21:20:51.0150734Z",
                    updatedAt: "2022-08-24T21:20:51.0150734Z",
                    name: "video"
                }
            ],
            errorMessage: null
        }

        axios.get.mockResolvedValueOnce(resp);

        const result = await getAllCategories();

        expect(axios.get).toHaveBeenCalledWith(`https://frontend-api-test-nultien.azurewebsites.net/api/Category`);
        expect(result).toEqual(resp);
    });

    it('getCategory call should be successful', async () => {
        const resp = {
            success: true,
            resultData: [],
            errorMessage: null
        }

        axios.get.mockResolvedValueOnce(resp);
        const result = await getCategory(id);

        expect(axios.get).toHaveBeenCalledWith(`${CATEGORY_BASE_URL}/${id}`);
        expect(result).toEqual(resp);
    });

    it('addCategory call should be successful', async () => {
        const body = {
            name: "video"
        }

        const resp = {
            id: 1,
            createdAt: "2022-08-24T21:35:19.8603742Z",
            updatedAt: "2022-08-24T21:35:19.8603742Z",
            name: "video"
        }

        axios.post.mockResolvedValueOnce(resp);
        const result = await addCategory(body);

        expect(axios.post).toHaveBeenCalledWith(`${CATEGORY_BASE_URL}`, body);
        expect(result).toEqual(resp);
    });

    it('deleteCategory call should be successful', async () => {
        const resp = null;

        axios.delete.mockResolvedValueOnce(resp);
        const result = await deleteCategory(id);

        expect(axios.delete).toHaveBeenCalledWith(`${CATEGORY_BASE_URL}/1`);
        expect(result).toEqual(resp)
    });
    
})
