import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import FullButton from '../common/FullButton';
import Shortcut from '../common/Shortcut';
//import paper_plane_outline from '../../static/img/paper-plane-outline.svg';
import CommentContainer from '../comment/CommentContainer';
import ImageSlider from '../common/ImageSlider';

const PostViewerBlock = styled.div`
    padding-top: 200px;
    margin-left: 10rem;
    margin-right: 10rem;
`;

const PostHead = styled.div`
    border-bottom: 1px solid ${ palette.gray[2] };
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1 {
        font-size: 3rem;
        line-height: 1.5;
        margin:0;
    }
`;

const SubInfo = styled.div`
    width: 80%;
    margin-top: 1rem;
    color: ${ palette.gray[6] };
    span + span:before {
        color: ${ palette.gray[5] };
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const MessageArea = styled.div`
    float: left;
    display: flex;
    margin-right: 50px;
    align-items: center;
`;

const RentalArea = styled.div`
    float: left;
    display: flex;
    align-items: center;
`;

const PostArticle = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    width: 100%;
    border-bottom: 1px solid ${ palette.gray[2] };
`;

const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${ palette.gray[8] };
`;

const PostNav = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    border-bottom: 1px solid ${ palette.gray[2] };
`;

const RentalButton = styled(FullButton)`
    width: 100px;
    &:hover {
        width: 100px;
    }
`;

const StyledShorcut = styled(Shortcut)`
    color: ${palette.blue[4]};
`;
const PostViewer = ({
    post,
    error,
    loading
}) => {
    const dummyData = [
        { "images": "https://picsum.photos/id/0/1000/1000.jpg" },
        { "images": "https://picsum.photos/id/1/1000/1000.jpg" },
        { "images": "https://picsum.photos/id/2/1000/1000.jpg" },
        { "images": "https://picsum.photos/id/3/1000/1000.jpg" },
        { "images": "https://picsum.photos/id/4/1000/1000.jpg" },
    ]
    // if(error) {
    //     if(error.response && error.response.status === 404) {
    //         return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>
    //     }

    //     return <PostViewerBlock>오류 발생!</PostViewerBlock>
    // }

    // if(loading || !post) {
    //     return null;
    // }

    return(
        <PostViewerBlock>
            <PostHead>
                <h1>title</h1>
                <SubInfo>
                    <span>
                        <b>writer</b>
                    </span>
                    <span>
                        {/* { post.createdAt } */}
                    </span>
                </SubInfo>
            </PostHead>
            <PostArticle>
                <ImageSlider Images={ dummyData }/>
            </PostArticle>
            <PostContent
                // dangerouslySetInnerHTML={{ __html: post.content }}
            />
            {
                // post.type === '빌려줄게요' &&
                <PostNav>
                    <MessageArea>
                        <StyledShorcut
                            path='/messages'
                            src={ paper_plane_outline }
                        />
                    </MessageArea>
                    <RentalArea>
                        <Link to={{
                                pathname: '/rentals',
                                state: {
                                    post: post
                                }}
                            }
                        >
                            <RentalButton>
                                빌리기
                            </RentalButton>
                        </Link>
                    </RentalArea>
                </PostNav>
            }
            <CommentContainer />
        </PostViewerBlock>
    );
};

export default PostViewer;