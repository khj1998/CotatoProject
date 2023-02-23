import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';

const PostCardBlock = styled.div`
    background-color: white;
    width: 400px;
    height: 100px;
    margin: 20px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const CardTitle = styled.div`
    float: left;
    width: 400px;
    height: 20px;
    overflow: hidden;
    text-align: center;
    padding-left: 10px;
`;

const CardCategory = styled.div`
    float: left;
    width: 400px;
    height: 45px;
    overflow: hidden;
    text-align: center;
    padding-top: 10px;
    padding-left: 10px;
`;

const CardDate = styled.div`
    float: left;
    width: 90px;
    padding-left: 10px;
    text-align: left;
    color: ${ palette.gray[6] }
`;

const PostCard = ({ item }) => {

    return(
        <Link to={ `/board/post/${item.boardPostId}` }>
            <PostCardBlock>
                <CardCategory>
                    {"카테고리 : "+item.category}
                </CardCategory>
                <CardTitle>
                    {"제목 : "+item.title }
                </CardTitle>
                <CardDate>
                    { item.createdAt.substr(0,10) }
                </CardDate>
            </PostCardBlock>
        </Link>
    );
};

export default PostCard;