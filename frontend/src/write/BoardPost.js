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

const postSubmit = async () => {
    await axios.post(`http://localhost:8080/boards/add`,postData,{
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        if (res.data.message == "Board Add Success") {
            alert("글 등록이 완료되었습니다.");
        } else {
            alert("알 수 없는 오류로 글 등록에 실패하였습니다.");
        }
    })
}

const BoardPost = () => {
    const postid = useParams();
    console.log(postid.boardPostId);
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
            </WriteFormBlock>
        </>
    );
};

export default BoardPost;