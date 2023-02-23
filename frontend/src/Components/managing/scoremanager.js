import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ScoreManager= () => {

    const getAllUsers = async () => {
        await axios.get(`http://localhost:8080/users/all`,{
            withCredentials : false,
            headers : {"Content-Type":"application/json"}
        }).then((res) => {
            if (res.data.message == "FIND ALL USERS") {
                console.log(res.data.data);
                for (var i=0;i<res.data.data.length;i++){
                    console.log(res.data.data[i]);
                }
            } else {
                alert("알 수 없는 오류로 유저 불러오기에 실패하였습니다.");
            }
        })
    }

    useEffect(() => {
        getAllUsers();
    })
    return (
        <>
        <p>
            안녕 월드!
        </p>
        </>
    );
}

export default ScoreManager;