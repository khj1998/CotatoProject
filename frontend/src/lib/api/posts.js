import client from './client';
// post create
export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

// post read id 값 가져오기 위해서 backtic 사용
export const readPost = (id) => client.get(`/api/posts/${id}`);

// post list api with qs
export const listPosts = ({ page, username, tag }) => {
  return client.get(`/api/posts`,{
    params: {page, username, tag},
  });
};

// update api
export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, { title, body, tags });

//delete api
export const removePost = id => client.delete(`/api/posts/${id}`);

export const write = ({
    userId,
    postType,
    category,
    title,
    content,
    rentalPrice,
    date,
    writer,
    images
}) => {
    if(postType === '빌려주세요') {
        const formData = new FormData();

        formData.append('userId', userId);
        formData.append('postType', postType);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('writer', writer);

        client.post('/post-service/write', formData);
    } else {
        const formData = new FormData();

        formData.append('userId', userId);
        formData.append('category', category);
        formData.append('images', images);
        formData.append('type', type);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('rentalPrice', rentalPrice);
        formData.append('date', date);
        formData.append('writer', writer);
        images.forEach((image) => formData.append("images", image));

        client.post('/post-service/write', formData);
    }
}
export const readAllPosts = () => client.get('/post-service');

export const readPostsByStatus = status => client.get(`/post-service/posts/status/${status}`)

export const readPostById = id => client.get(`/post-service/post/${id}`);

export const readPostsByUserId = userId => client.get(`/post-service/${userId}/posts`);

export const readPostsByCategory = category => client.get(`/post-service/category/${category}`);

export const readPostsByKeyword = keyword => client.get(`/post-service/keyword/${keyword}`);

export const deletePost = id => client.get(`/post-service/${id}/delete`);

export const writeComment = ({ id, comment }) => client.post(`/post-service/${id}/comments`, comment);

export const deleteComment = id => client.delete(`/post-service/${id}/comments`);