import React, { useState,useEffect } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from "./common/Button"
import axios from "axios";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #e9ecef;
  display: flex;
  flex-display: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: #343a40;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #adb5bd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #495057;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const ModifyUserInfo = () => {
  const [form, setForm] = useState({});
  
  const onInputChange = (e) => {
    setForm({...form,[e.target.name]:e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:8080/users/modify/info`,form,
    {
        withCredentials: true,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        if (res.data.message == "INFO MODIFY SUCCESS") {
          alert("회원 정보가 수정되었습니다."); 
          history.go(-1);
        } else if (res.data.message = "NICKNAME ALREADY USED") {
          alert("이미 사용중인 닉네임 입니다.");
        }
    })
  }

  const getUserInfo = async () => {
    await axios.get(`http://localhost:8080/users/info`,{
      withCredentials : true,
      headers : {"Content-Type" : "application/json"}
    }).then((res) => {
       setForm(res.data.data);
    })
  }

  useEffect(() => {
    getUserInfo();
  });

  return(
    <>
    <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    <Link to="/cotato">COTATO</Link>
                </div>
                <AuthFormBlock>
            <h3>닉네임 설정</h3>
            <form onSubmit={onSubmit}>
                <StyledInput
                    autocomplete="username"
                    name="username"
                    placeholder= {form.username}
                    readOnly
                />
                <StyledInput
                    autocomplete="username"
                    name="username"
                    placeholder= {form.nickname}
                    readOnly
                />
                <StyledInput
                    autocomplete="new-password"
                    name="nickname"
                    placeholder={"변경할 닉네임을 입력하세요."}
                    onChange={(e) => onInputChange(e)}
                />

                <ButtonWithMarginTop cyan fullWidth style={{marginTop: '1rem'}}>
                    회원수정
                </ButtonWithMarginTop>
            </form>
            </AuthFormBlock>
            </WhiteBox>
        </AuthTemplateBlock>
    </> 
  )
};
export default ModifyUserInfo;