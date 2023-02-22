
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../Components/common/Button';

class Navigation extends Component {
    render() {

        return (
            <Nav>
                <NavList>
                    <NavItem><Link to="/cotato" classname="logo">COTATO</Link></NavItem>
                    <NavItem>
                        <Link to="/calendar" classname="nav">일정</Link>
                     </NavItem>
                    <NavItem>
                        <Link to = "/postList">
                        게시판</Link></NavItem>
                    <NavItem>
                        <Link to = "/vote/create">투표생성</Link>
                    </NavItem>  
                    <NavItem>
                        <Link to = "/vote">투표하기</Link>
                    </NavItem>    
                    <NavItem><Link to = "/mypage">마이페이지</Link></NavItem>
                    <NavItem>
                         <Link to ="/List"> 리스트 </Link>
                    </NavItem>
                    <LogItem>
                         <Button to="/login">로그인</Button>
                         <Button to="/register">회원가입</Button>
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
    margin-left: 50px;
    margin-top: 5px;
    display: flex;
    padding-right:20px;
    padding-top:10px;




    `

const LogItem = styled.li`
    width: 30vw;
    margin-top: 5px;
    margin-left:20px;
    display: flex;
    text-align: left;
    `