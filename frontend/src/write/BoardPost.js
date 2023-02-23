import axios from 'axios';
import styled from "styled-components";
import Responsive from "../Components/common/Responsive";
import Select from 'react-select';
import palette from "../lib/styles/palette";
import { useParams } from 'react-router-dom';

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

let post = {
    "category" : "",
    "title" : "",
    "content" : ""
}

const postSubmit = async (postId) => {
    await axios.get(`http://localhost:8080/boards/${postId}`,{
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        if (res.data.message == "GET POST") {
            console.log(res.data.data);
        } 
    })
}

const BoardPost = () => {
    const postid = useParams();
    postSubmit(postid.boardPostId);
    return(
        <>
            <WriteFormBlock>
                    <Select
                        placeholder="카테고리를 정해주세요"
                    />
                    <TitleInput
                        placeholder="게시글 제목을 작성해주세요"
                        readOnly
                    />
                    <ContentInput
                        placeholder="게시글 내용을 작성해주세요"
                        readOnly
                    />
                    <AuthorInput
                        placeholder="작성자"
                        readOnly
                    />
            </WriteFormBlock>
        </>
    );
};

export default BoardPost;