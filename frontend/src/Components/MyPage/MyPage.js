import React from 'react';
import HeaderTemplate from '../common/HeaderTemplate';
import MyPageTemplate from './MyPageTemplate';
import MyPageForm from './MyPageForm';
import axios from 'axios';

let scoreData;
const getScore = async() => {
    await axios.get(`http://localhost:8080/users/score`,
    {
        withCredentials: true,
        headers : {"Content-Type" : "application/json"}
    }).then(res => {
        scoreData = res.data.data;
        localStorage.setItem("plus",scoreData.plus);
        localStorage.setItem("minus",scoreData.minus);
    });
}

const MyPage = () => {
    getScore();
    return(
        <>
            <HeaderTemplate />
            <MyPageTemplate />
        </>
    );
};

export default MyPage;