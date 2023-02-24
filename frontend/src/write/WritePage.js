import React from 'react';
import HeaderTemplate from '../Components/common/HeaderTemplate';
import WriteHeaderTemplate from './WriteHeaderTemplate';
import WriteTemplate from './WriteTemplate';
import WriteContainer from './WriteContainer';
import axios from 'axios';

const getUserInfo = async () => {
    await axios.get('http://localhost:8080/users/info',
    {
        withCredentials : true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        if (res.data.message == "USER NOT AUTHENTICATED") {
            alert('로그인 후 글 등록이 가능합니다.');
            window.open('http://localhost:3000/login','_self');
        }
    });
}

const WritePage = () => {
    getUserInfo();
    return(
        <>
            <HeaderTemplate />
            <WriteTemplate>
                <WriteHeaderTemplate />
                <WriteContainer />
            </WriteTemplate>
        </>
    );
};

export default WritePage;