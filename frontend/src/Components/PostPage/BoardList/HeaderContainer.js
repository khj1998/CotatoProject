
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
import { useEffect } from 'react';
import axios from 'axios';
import React, {useRef, useState} from "react";
import styles from "./sidebar.module.css";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import MyPage from '../../MyPage/MyPage';

let User = null;

const validCheck = async () => {
  await axios.get(`http://localhost:8080/user/valid`).then((res) =>{
      if (res.data.username != "NONE") {
          User = {username : res.data.username};
      }
  })
}


const HeaderContainer = () => {    
    useEffect(async () => {
        await validCheck();
      })
    return (<><Header User={User} />
    <Sidebar width={320}>
    <Link to="/login"><h2>세미나</h2></Link>
    <Link to="/login"><h2>프로젝트</h2></Link>
    <Link to="/login"><h2>스터디</h2></Link>
    <Link to="/login"><h2>해커톤</h2></Link>
    <Link to="/login"><h2>친목</h2></Link>

    </Sidebar></>
    )
};




export default HeaderContainer;