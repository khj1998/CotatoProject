import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { withRouter } from 'react-router';
import PostHeader from './PostHeader';
import PostCard from './PostCard';
import axios from 'axios';

const PostListTemplateBlock = styled.div`
    background: ${ palette.gray[2] };
    padding-top: 30px;
    display: flex;
    flex-direction: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

let isPostGetEnd = false;
const getAllPosts = async () => {
    await axios.get(`http://localhost:8080/boards/all`,{
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        console.log(res.data.data[0]);
        if (res.data.message == "GET ALL BOARD POSTS") {

        }
    });
    isPostGetEnd = true;
}

const PostListTemplate = () => {
    const dummyData = [
        { "id" : 1 ,"category":"스터디" , "title": "test-01", "content":"", "username": "test-01", createdAt: "2020-01-01" },
        { "id" : 2 ,"category":"스터디" , "title": "test-02", "content":"", "username": "test-01", createdAt: "2020-01-01" },
        { "id" : 3 ,"category":"스터디" , "title": "test-03", "content":"", "username": "test-01", createdAt: "2020-01-01" },
        { "id" : 4 ,"category":"스터디" , "title": "test-04", "content":"", "username": "test-01", createdAt: "2020-01-01" },
    ];

    getAllPosts();
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