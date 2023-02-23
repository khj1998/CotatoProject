import React from 'react';
import styled from 'styled-components';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const PostCardBlock = styled.div`
    background-color: white;
    width: 400px;
    height: 130px;
    margin-left : 100px;
    margin: 20px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const CardTitle = styled.div`
    float: left;
    width: 400px;
    height: 25px;
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
    padding-left: 20px;
`;

const PostCard = ({ user }) => {
    const updateScore = async() => {
        await axios.post(`http://localhost:8080/users/score/update`)
        .then((res) => {
            console.log(res);
        });
    }

    const onClick = (e) => {
        e.preventDefault();
        updateScore();
    }

    return(
        <PostCardBlock>
            <CardCategory>
                {"회원번호 : "+user.userId}
            </CardCategory>
            <CardTitle>
                {"닉네임 : "+user.nickname}
            </CardTitle>
            <CardTitle>
                {"상점 : "+user.plus}
                &nbsp;&nbsp; <PlusButton>상점 부여</PlusButton>
            </CardTitle>
            <CardTitle>
                {"벌점 : "+user.minus}
                &nbsp;&nbsp; <MinusButton>벌점 부여</MinusButton>
            </CardTitle>
        </PostCardBlock>
    );
};

export default PostCard;