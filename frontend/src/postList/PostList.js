import React from 'react';
import styled from 'styled-components';
import Responsive from '../Components/common/Responsive';
import Button from '../Components/common/Button';
import palette from '../lib/styles/palette';
import SubInfo from '../Components/common/SubInfo';

//import Tags from '../common/Tags';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 처음 요소 스타일링 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    /* h2:hover 와 같은 의미 */
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

 

// const Tags = styled.div`
//   margin-top: 0.5rem;
//   .tag {
//     display: inline-block;
//     color: ${palette.violet[7]};
//     text-decoration: none;
//     margin-right: 0.5rem;
//     &:hover {
//       color: ${palette.violet[2]};
//     }
//   }
// `;

const PostItem = () => {
  console.log(PostItem);
  return (
    <PostItemBlock>
      <h2>제목</h2>
      {/* sample code */}
      <SubInfo username="username sample" publishedDate={new Date()} />
      <p>포스트 내용의 일부분쓰</p>
    </PostItemBlock>
  );
};

const PostList = () => {
  return (
    <PostListBlock>
      <WritePostButtonWrapper>
        <Button to="/write">
          새글 작성하기
        </Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListBlock>
  );
};

export default PostList;