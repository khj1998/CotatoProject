import client from './client';
import axios from 'axios';

export const write = ({
    category,
    title,
    content,
    images,
}) => {
        const formData = new FormData();

        formData.append('category', category);
        formData.append('images', images);
        formData.append('title', title);
        formData.append('content', content);
        axios.post(`http://localhost:8080/boards/add`, formData,
        {
            withCredentials: false,
            headers : {"Content-Type" : "application/json"}}
        )
       .then((data) => console.log(data));
        }

export const readPost = id => client.get(`/api/posts/${id}`); 





export const readAllPosts = () => client.get('/post-service');

export const readPostsByStatus = status => client.get(`/post-service/posts/status/${status}`)

export const readPostById = id => client.get(`/post-service/post/${id}`);

export const readPostsByUserId = userId => client.get(`/post-service/${userId}/posts`);

export const readPostsByCategory = category => client.get(`/post-service/category/${category}`);

export const readPostsByKeyword = keyword => client.get(`/post-service/keyword/${keyword}`);

export const deletePost = id => client.get(`/post-service/${id}/delete`);

export const writeComment = ({ id, comment }) => client.post(`/post-service/${id}/comments`, comment);

export const deleteComment = id => client.delete(`/post-service/${id}/comments`);