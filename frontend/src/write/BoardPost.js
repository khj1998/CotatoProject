import axios from 'axios';
import styled from "styled-components";
import Responsive from "../Components/common/Responsive";
import Select from 'react-select';
import palette from "../lib/styles/palette";
import { useParams } from 'react-router-dom';

import HeaderTemplate from '../Components/common/HeaderTemplate';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;

`;
const PostHead = styled.div`
 
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
    transform: translate(0%, 300%);
  }
`;
const SubInfo = styled.div`
border-bottom: 1px solid ${palette.gray[2]};
  margin-top: 1rem;
  color: #C69749;
  transform: translate(0%, 900%);

  /* span 사이에 가운뎃점 문자 보여 주기 */
  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
    
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  transform: translate(0%, 700%);
  position: flex;
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
        <styledHead>
        <HeaderTemplate/>
        </styledHead>
        <PostViewerBlock>
        <PostHead>
        <h1>제목</h1>
        <SubInfo>
          <span>
            <b>tester</b>
          </span>
          <span>{new Date().toLocaleDateString()}</span>
        </SubInfo>
      </PostHead>
      <PostContent
        dangerouslySetInnerHTML={{ __html: '<p>HTML<b>내용</b>입니다.</p>' }}/>
    </PostViewerBlock>
    </>
  );
};

export default BoardPost;