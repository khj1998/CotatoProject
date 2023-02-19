import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { withRouter } from 'react-router';
import PostHeader from './PostHeader';
import PostCard from './PostCard';

const PostListTemplateBlock = styled.div`
    background: ${ palette.gray[2] };
    padding-top: 30px;
    display: flex;
    flex-direction: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const PostListTemplate = ({ history }) => {
    const dummyData = [
        { "images": ["https://picsum.photos/id/0/1000/1000.jpg"],"id" : 1 ,"title": "test-01", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/1/1000/1000.jpg"],"id" : 2 ,"title": "test-02", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/2/1000/1000.jpg"],"id" : 3 , "title": "test-03", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/3/1000/1000.jpg"],"id" : 4 , "title": "test-04", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/4/1000/1000.jpg"],"id" : 5 , "title": "test-05", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/5/1000/1000.jpg"],"id" : 6 , "title": "test-06", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/6/1000/1000.jpg"],"id" : 7 , "title": "test-07", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/7/1000/1000.jpg"],"id" : 8 , "title": "test-08", "username": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/8/1000/1000.jpg"],"id" : 9 , "title": "test-09", "username": "test-01", createdAt: "2020-01-01" },
    ];

    return(
        <>
            <PostHeader />
            <PostListTemplateBlock>
                {
                    dummyData.map((item) => {
                        return  <PostCard item={ item } key = {item.title}
                                />
                    })
                }
            </PostListTemplateBlock>
        </>
    );
};

export default withRouter(PostListTemplate);