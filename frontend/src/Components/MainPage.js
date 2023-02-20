import React from 'react';
import styled from 'styled-components';
import Header from '../Layout/Header';
import Navigation from '../Layout/Navigation';
import Content from '../Layout/Content';
import Gate from '../Layout/Gate';
import SnsTemplate from '../Contents/Insta';
import Copy from '../Layout/Copy';
import Calendar from '../Layout/Calendar/containers/Calendar';
import '../Layout/Calendar/style/calendar.css';
import '../Layout/Calendar/style/table.css';
import '../Layout/Calendar/style/modal.css';
import Home from '../Components/main/Home';
import { Link } from 'react-scroll';
import  '../Components/main/Home.css';




const MainPage = () => {
    return (
            <Layout>
                <Navigation />
                <Header />
                <Home />
                <Layout1>
                    <Content/>
                </Layout1>
                <Layout1>
                <Gate/>
                </Layout1>
                <Layout1>
                    <Calendar/>
                </Layout1>
                <Layout1>
                <SnsTemplate/>
                </Layout1>

                <Footer>
                <Copy/>
                </Footer>

            </Layout>

    );
};



const Layout = styled.div`

  overflow-x: hidden;
  overflow-y: auto;

    &::-webkit-scrollbar {
        border-radius: 0.5px;
        border-height: 0.5px;
        background: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.5px;
      border-height: 0.5px;
      background: #E1D7C6;
    }
  display: flex;
  flex-flow: row wrap;
  width: 100vw;
  height: 100vh;
`

const Layout1 = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  transform: translate( 5%, 55%);
`
const Footer = styled.div`
   display:flex;
    bottom: 0;
    width: 120%;
    transform: translate( 0%, 300%);
    `

export default MainPage;



