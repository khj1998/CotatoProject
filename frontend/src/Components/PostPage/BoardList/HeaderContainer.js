
import { useSelector } from 'react-redux';
import Header from '../../common/Header';
import { useEffect } from 'react';
import axios from 'axios';

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
    return <Header User = {User}/>;
};

export default HeaderContainer;