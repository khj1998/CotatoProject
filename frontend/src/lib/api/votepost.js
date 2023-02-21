import client from './client';

export const votePost = ({ title, content }) =>
    client.post('/api/votpost', { title, content });