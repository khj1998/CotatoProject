import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Shortcut from './Shortcut';
/*import home_outline from '../../static/img/home-outline.svg';
import clipboard_outline from '../../static/img/clipboard-outline.svg';
import person_outline from '../../static/img/person-outline.svg';*/

const HeaderBox = styled.div`
    width: 100%;
    height: 130px;
    position: fixed;
    background-color: white;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
    float: left;
    width: 30%;
    height: 130px;
    font-weight: bold;
    font-size: 40px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 30px;
    a {
        color: #AA8B56;
    }
`;

const Nav = styled.div`
    float: left;
    width: 60%;
    height: 130px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const HeaderTemplate = () => {
    return(
        <HeaderBox>
            <Title>
                <Link to="/cotato">
                    COTATO
                </Link>
            </Title>

            <Nav>
            <Shortcut
                    path="/postlist"
                    src='https://velog.velcdn.com/images/kkaerrung/post/61416348-fc57-47f6-9150-2f9a897b4191/image.png' 
                />
                <Shortcut
                    path="/mypage"
                    src= 'https://velog.velcdn.com/images/kkaerrung/post/9c15ac89-ed7f-4d91-a4de-83e7ff3a2668/image.png'
                />
                <Shortcut
                    path="/cotato"
                    src= 'https://velog.velcdn.com/images/kkaerrung/post/a0f1087c-43a0-45fd-97fc-aca58a841d08/image.png'
                />
            </Nav>

        </HeaderBox>
    );
};

export default HeaderTemplate;