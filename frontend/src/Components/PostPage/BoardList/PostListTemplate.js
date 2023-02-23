import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { withRouter } from 'react-router';
import PostCard from './PostCard';
import axios from 'axios';

const PostListTemplateBlock = styled.div`
    background: #ECDBBA;
    padding-top: 30px;
    display: flex;
    flex-direction: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
let postData = []

const getAllPosts = async (postData) => {
    await axios.get(`http://localhost:8080/boards/all`,{
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        if (res.data.message == "GET ALL BOARD POSTS" ) {
            for (let i =0; i<res.data.data.length;i++) {
                postData.push(res.data.data[i]);
            }
        }
        console.log(postData);
    });
}
getAllPosts(postData);

const PostListTemplate = () => {
    return (
        <>
            <PostListTemplateBlock>
                {
                    postData.map((post) => {
                        return  <PostCard item={ post } key = {post.boardPostId}
                                />
                    })
                }
            </PostListTemplateBlock>
        </>
    );
};

export default withRouter(PostListTemplate);