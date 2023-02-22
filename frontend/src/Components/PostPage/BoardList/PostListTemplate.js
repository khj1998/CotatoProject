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
        { "id" : 1 ,"category":"스터디" , "title": "test-01", "content":"", "username": "test-01", createdAt: "2020-01-01" },
        { "id" : 2 ,"category":"스터디" , "title": "test-02", "content":"", "username": "test-01", createdAt: "2020-01-01" },
        { "id" : 3 ,"category":"스터디" , "title": "test-03", "content":"", "username": "test-01", createdAt: "2020-01-01" },
        { "id" : 4 ,"category":"스터디" , "title": "test-04", "content":"", "username": "test-01", createdAt: "2020-01-01" },
    ];

    return(
        <>
            <PostHeader />
            <PostListTemplateBlock>
                {
                    dummyData.map((item) => {
                        return  <PostCard item={ item } key = {item.id}
                                />
                    })
                }
            </PostListTemplateBlock>
        </>
    );
};

export default withRouter(PostListTemplate);