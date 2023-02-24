import React, { useState } from 'react';
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
    const updateScore = async(scoreUpdate) => {
        await axios.post(`http://localhost:8080/users/score/update`,scoreUpdate,{
            withCredentials : true,
            headers : {"Content-Type" : "application/json"}
            ,params : {
                userId : user.userId
            }
        })
        .then((res) => {
            if (res.data.message == "UPDATE USER SCORE") {
                alert(res.data.data.userId+"번 감자의 "+"점수가 업데이트 되었습니다.");
            } else if (res.data.message == "USER NOT FOUND") {
                alert("존재하지 않는 감자입니다.");
            } else if (res.data.message == "USER BANNED") {
                alert("해당 감자는 벌점 누적으로 활동이 정지되었습니다.");
            }
        });
    }

    const onPlusClick = (e) => {
        const scoreUpdate = {
            "plusUpdate" : 1,
            "minusUpdate" : 0
        }
        e.preventDefault();
        updateScore(scoreUpdate);
    }

    const onMinusClick = (e) => {
        const scoreUpdate = {
            "plusUpdate" : 0,
            "minusUpdate" : -1
        }
        e.preventDefault();
        updateScore(scoreUpdate);
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
                &nbsp;&nbsp; <PlusButton onClick = {(e) => onPlusClick(e)}>상점 부여</PlusButton>
            </CardTitle>
            <CardTitle>
                {"벌점 : "+user.minus}
                &nbsp;&nbsp; <MinusButton onClick = {(e) => onMinusClick(e)}>벌점 부여</MinusButton>
            </CardTitle>
        </PostCardBlock>
    );
};

export default PostCard;