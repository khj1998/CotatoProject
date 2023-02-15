import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <Nav>
                <NavList>
                    <NavItem>소개</NavItem>
                    <NavItem>
                        <Link to = "/PostList">
                        게시판</Link></NavItem>
                    <NavItem>내 글보기</NavItem>
                    <NavItem><Link to = "/mypage">마이페이지</Link></NavItem>
                    <LogItem>
                        <Link to="/login">로그인/</Link>
                        <Link to="/register" >회원가입</Link>
                    </LogItem>
                </NavList>
            </Nav>
        );
    }
}

export default Navigation;

const Nav = styled.div`
    margin:0;
    width: 105vw;
    height: -10px;
    background-color: #D0B8A8;
`

const NavList = styled.ul`
    width: 90vw;
    display: flex;
    margin: 5px auto;
`



const NavItem = styled.li`
    width: 20vw;
    margin-left: 18px;
    margin-top: 5px;
    display: flex;
    padding-right:20px;




    `

const LogItem = styled.li`
    width: 30vw;
    margin-top: 5px;
    display: flex;
    text-align: left;
    `