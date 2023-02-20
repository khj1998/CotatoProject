import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <Container>
                <Element>
                    <ShortCut>
                        <Logo>
                            <img
                                width="50%"
                                //height="107%"
                                src="https://velog.velcdn.com/images/kkaerrung/post/b94c624c-8271-48ff-9242-5fdd8001a3d2/image.png"
                                alt="logo"/>
                            <img
                                width="50%"
                                //height="107%"
                                src="https://velog.velcdn.com/images/kkaerrung/post/d24630de-7893-439a-ba26-d36827556db8/image.png"
                                alt="logo"/>
                        </Logo>
                    </ShortCut>
                    <Search><h1>코테이토</h1></Search>
                </Element>
            </Container>

        );
    }
}

const Container = styled.div`
text-align:center;

`

const Element = styled.div`
    margin: 0 auto;
    width: 105vw;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const Logo = styled.div`
    order: 2;
    width: auto;
    max-width: 180px;
    height: 60px;
    margin-top: 30px;
    margin-right: 180px;
    position:relative;
    z-index: 2;
    `

const ShortCut = styled.div`
    order: 1;
    width: 105vw;
    height:30px;
    text-align:right;
    background-color: #EEE3CB;
    margin-right:50px;
    padding-right: 95px;
    position: relative;
    z-index: 2;
`

const Search = styled.div`
    order: 3;
    width: 105vw;
    height:90px;
    background-color: #EEE3CB;
 //text-align:center;
    position: relative;
    right:40px;
    z-index: 1;
    padding:10px;
`

export default Header;