import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { withRouter } from 'react-router';
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

const PostListTemplate = () => {
    const [postData,setPostData] = useState([]);
    
    const getAllPosts = async () => {
        await axios.get(`http://localhost:8080/boards/all`,{
            withCredentials : true,
            headers : {"Content-Type" : "application/json"}
        }).then((res) => {
            if (res.data.message == "GET ALL BOARD POSTS" ) {
                for (let i =0; i<res.data.data.length;i++) {
                    setPostData(postData => [...postData,res.data.data[i]]);
                }
            }
        });
    }

    useEffect(() => {
        getAllPosts();
    },[])
    return (
        <>
            <PostListTemplateBlock>
                {
                    postData.length>0 &&
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