import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../lib/styles/palette';

const PostListBlock = styled(Responsive);
margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin-button: 3rem;
`;
const PostListBlock = styled.div`
padding-top: 3rem;
padding-bottom: 3rem;
&:first-child{
padding-top: 0;
}
&+&(
    border-top: 1px solid ${palette.gray[2]};
}
h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
    color: ${palette.gray[6]};
    }
    }
    p{
    margin-top: 2rem;
    }
    `;
   const SubInfo = styled.div`
   color: ${palette.gray[6]};

   span+span: before{
   color: ${palette.gray[4]};
   padding-left: 0.25rem;
   padding-right: 0.25rem;
   content: '\\B7'; /*가운데점 문자*/
   }
   `;
   const Tags = styled.div`
   margin-top: 0.5rem;
   .tag{
   display: inline-block;
   color: ${palette.cyan[7]};
   text-decoration: none;
   margin-right: 0.5rem;
   &:hover{
   color: ${palette.cyan[6]};
   }
   }
   `;
   const PostItem = () => {
   return (
   <PostListBlock>
   <h2>제목</h2>
   <SubInfo username = "username" publishedDate = {new Date()} />
   <Tags tags = {['태그1','태그2','태그3']} />
   <p>포스트 내용의 일부분..</p>
   </PostListBlock>
   );
   };

   const PostList = () => {
   return(
   <PostListBlock>
   <WritePostButtonWrapper>
   <Button cyan to = "/write">
   새글 작성하기
   </Button>
   </WritePostButtonWrapper>
   <div>
   <PostItem/>
   <PostItem/>
   <PostItem/>
   </div>
   </PostListBlock>
   );
   };

   export default PostList;