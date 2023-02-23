import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import Responsive from "../Components/common/Responsive";
import Select from 'react-select';
import palette from "../lib/styles/palette";
import { useParams } from 'react-router-dom';
import FullButton from "../Components/common/FullButton";

const WriteFormBlock = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

const TitleInput = styled.input`
    width: 100%;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${ palette.blue[2] };
    margin-top: 1rem;
    margin-bottom: 2rem;
    outline: none;
`;

const AuthorInput = styled.input`
    width: 100%;
    font-size: 1rem;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${ palette.blue[2] };
    margin-top: 1rem;
    margin-bottom: 2rem;
    outline: none;
`;

const ContentInput = styled.textarea`
    width: 100%;
    height: 400px;
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${ palette.blue[2] };
    margin-top: 1rem;
    margin-bottom: 1rem;
    outline: none;
    resize: none;
`;

const CustomFullButton = styled(FullButton)`
    margin-right: 25px;
    margin-left: 25px;
    width: 200px;
    &:hover {
        margin-right: 25px;
        margin-left: 25px;
        width: 200px;
        cursor: pointer;
    }
`;

const onCancel = () => {
    history.go(-1);
};

const BoardPost = () => {
    const postid = useParams();

    const [post,setPost] = useState({
        "category" : "",
        "title" : "",
        "content" : "",
        "nickname" : ""
    });

    const postSubmit = async (postId) => {
        await axios.get(`http://localhost:8080/boards/${postId}`,{
            withCredentials : true,
            headers : {"Content-Type" : "application/json"}
        }).then((res) => {
            if (res.data.message == "GET POST") {
                setPost(res.data.data);
            } else {
                alert("해당 글을 불러올 수 없습니다.");
                history.go(-1);
            }
        })
    }
    
    useEffect(() => {
        postSubmit(postid.boardPostId);
    },[]);

    return(
        <>
            <WriteFormBlock>
                    <Select
                        placeholder={"카테고리 : "+post.category}
                    />
                    <TitleInput
                        placeholder={"제목 : " + post.title}
                        readOnly
                    />
                    <ContentInput
                        placeholder={post.content}
                        readOnly
                    />
                    <AuthorInput
                        placeholder={"작성자 : " + post.nickname}
                        readOnly
                    />
            </WriteFormBlock>

            <CustomFullButton red onClick={ onCancel }>
                뒤로가기
            </CustomFullButton>
        </>
    );
};

export default BoardPost;