import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
class Copy extends Component {
    render() {
        return (
            <Container>
                <Element>
                    <Search><p>COPYRIGHT ⓒ 2023. cotato copyright Association All right reserved.</p>
                                <p>5기 운영진 이강희 (회장), 남연재 (부회장)</p>
                                <p>조용헌 (운영지원팀), 김경진(홍보팀), 서승주(기획팀), 박효민(교육팀)</p></Search>
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
    width: 100vw;
    height: 100hw;
    display: flex;
    flex-flow: row wrap;
    transform: translate(  -5%, 1085% );
`

const ShortCut = styled.div`
    order: 1;
    width: 100vw;
    height: 30px;
    background-color: #DDDDDD;
    margin-rigth:20px;
    padding-right: 95px;
    position: relative;
    z-index: 2;
`

const Search = styled.div`
    order: 3;
    width: 100vw;
    margin-top: 10px;
    background-color: #DDDDDD;
    text-align: center;
    position: relative;
    z-index: 1;
`
const text = styled.div`
 transform: translate( 10% );
 `


export default Copy;