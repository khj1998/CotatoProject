import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import axios from 'axios';

const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    background-color: ${palette.blue[2]};
    //color: #ffffff;
    border: none;
    &:hover {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        background-color: ${palette.blue[1]};
        //color: #ffffff;
        border: none;
        cursor: pointer; 
    }
`;

const onClick = async(e) => {
    e.preventDefault();
    await axios.get(`http://localhost:8080/logout`,
    {
        withCredentials: true,
        headers : {"Content-Type" : "application/json"}
    }).then(res => {
        if (res.data.message == "LOGOUT SUCCESS") {
            alert("로그아웃되었습니다. 로그인화면으로 이동합니다.");
            window.open('http://localhost:3000/login', '_self');
        } else if (res.data.message == "USER ALREADY LOGGED OUT") {
            alert("이미 로그아웃 되었습니다.");
            window.open('http://localhost:3000/login', '_self');
        } else {
            alert("알 수 없는 오류로 로그아웃에 실패하였습니다.");
        }
    });
}

const LogoutButton = () => {
    return(
        <Button onClick = {onClick}>
            Logout
        </Button>
    );
};

export default LogoutButton;