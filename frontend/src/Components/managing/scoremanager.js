import React,{useState,useEffect} from 'react'
import axios from 'axios'
import HeaderContainer from '../PostPage/BoardList/HeaderContainer';
import Sidebar from './Sidebar';
import UserCard from './UserCard'

const ScoreManager= () => {
    const [users,setUsers] = useState([]);

    const getAllUsers = async () => {
        await axios.get(`http://localhost:8080/users/all`,{
            withCredentials : false,
            headers : {"Content-Type":"application/json"}
        }).then((res) => {
            if (res.data.message == "FIND ALL USERS") {
                for (let i=0;i<res.data.data.length;i++){
                    setUsers(users => [...users,res.data.data[i]]);
                }
            } else {
                alert("알 수 없는 오류로 유저 불러오기에 실패하였습니다.");
            }
        })
    }

    useEffect(() => {
        getAllUsers();
    },[])

    return (
        <>
        <HeaderContainer />
        <Sidebar />
        {
            users.length>0 &&
            users.map((user) => {
             return <UserCard user = {user} key = {user.userId}/>
            })
        }
        </>
    );
}

export default ScoreManager;