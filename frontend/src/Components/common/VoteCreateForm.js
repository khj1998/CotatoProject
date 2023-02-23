import React, {useState} from 'react';
import styled from "styled-components";
import _ from 'lodash';
import {Button ,Divider} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border: none;
  border-bottom: 2px solid slategray;
  margin-bottom: 2rem;
  margin-left: 1rem;
  width: 90%;
`;

const PlaceInput = styled.input`
  font-size: 15pt;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 2px solid slategray;
  margin-bottom: 2rem;
  margin-left: 1rem;
  width: 50%;
`;

const VotePostButtonBlock = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
      margin-left: 0.5rem;
    }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const VoteCreateForm = () => {

    const [voteForm, setVoteForm] = useState(
        {
            "userId" : "",
            "title" : "",
            "content": ""
        });
      
    const onInputChange = (e) => {
        setVoteForm({...voteForm,[e.target.name]:e.target.value});
    }

    const submitVote = async () => {
        voteForm.userId = localStorage.getItem('Id');
        await axios
            .post("http://localhost:8080/cotato/vote",voteForm,{
               withCredentials : false,
               "Content-Type" : "application/json",
               params : {
                userid : voteForm.userId
            }
            })
            .then(
                (response) => {
                    if (response.data.message == "NOT ADMIN") {
                        alert("관리자만 투표를 생성할 수 있습니다!");
                    } else {
                        alert("투표가 생성되었습니다.");
                        window.open('http://localhost:3000/cotato','_self');
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const onCancel = () =>{
        // history 객체 사용으로 뒤로 가기
        history.go(-1);
    };

    return (
        <>
            <TitleInput
                placeholder="투표 제목을 입력하세요. (ex. 3/3 정기세션 투표)"
                name = "title"
                onChange={(e) => onInputChange(e)}
            />
            <PlaceInput
                placeholder="세션 장소를 입력하세요"
                name = "content"
                onChange={(e) => onInputChange(e)}
            />
            <VotePostButtonBlock>

            <Divider/>

            <br></br>                
            <StyledButton onClick = {() => submitVote()}>
                투표 생성
            </StyledButton>
            <StyledButton onClick={onCancel}>취소</StyledButton>
            </VotePostButtonBlock>
        </>
    );
};

export default VoteCreateForm;