import client from './client';

export const votePost = ({ title, place }) =>
    client.post('/api/votepost', { title, place });