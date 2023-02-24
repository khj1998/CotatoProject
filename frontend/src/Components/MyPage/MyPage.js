import React from 'react';
import HeaderTemplate from '../common/HeaderTemplate';
import MyPageTemplate from './MyPageTemplate';
import axios from 'axios';

const getUserValid = async () => {
    await axios.get(`http://localhost:8080/user/valid`,
    {
       withCredentials: true,
       headers : {"Content-Type" : "application/json"}
    }).then((res) => {
       console.log(res.data.message);
       if (res.data.message == "USER NOT AUTHENTICATED") {
          alert("로그인을 먼저 진행해주세요.");
          window.open('http://localhost:3000/login','_self');
       }
    });
 }

const MyPage = () => {
    getUserValid();
    return(
        <>
            <HeaderTemplate />
            <MyPageTemplate />
        </>
    );
};

export default MyPage;