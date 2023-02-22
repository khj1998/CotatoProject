import React from 'react';
import HeaderTemplate from '../common/HeaderTemplate';
import MyPageTemplate from './MyPageTemplate';
import axios from 'axios';

const getUserInfo = async() => {
    let userData;
    await axios.get(`http://localhost:8080/users/info`,
    {
        withCredentials: true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        localStorage.clear();   
        userData = res.data.data;
        localStorage.setItem("plus",userData.plus);
        localStorage.setItem("minus",userData.minus);
        localStorage.setItem("username",userData.username);
        localStorage.setItem("nickname",userData.nickname);
    });
}

const MyPage = () => {
    getUserInfo();
    while(true) {
        if (localStorage.getItem("username")) {
            break;
        } 
    }
    return(
        <>
            <HeaderTemplate />
            <MyPageTemplate />
        </>
    );
};

export default MyPage;