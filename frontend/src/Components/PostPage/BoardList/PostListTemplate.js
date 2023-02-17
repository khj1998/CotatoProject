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
        { "images": ["https://picsum.photos/id/0/1000/1000.jpg"], "title": "test-01", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/1/1000/1000.jpg"], "title": "test-02", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/2/1000/1000.jpg"], "title": "test-03", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/3/1000/1000.jpg"], "title": "test-04", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/4/1000/1000.jpg"], "title": "test-05", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/5/1000/1000.jpg"], "title": "test-06", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/6/1000/1000.jpg"], "title": "test-07", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/7/1000/1000.jpg"], "title": "test-08", "nickname": "test-01", createdAt: "2020-01-01" },
        { "images": ["https://picsum.photos/id/8/1000/1000.jpg"], "title": "test-09", "nickname": "test-01", createdAt: "2020-01-01" },
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