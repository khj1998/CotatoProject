import React, {useState,useEffect} from 'react';
import styled from "styled-components";
//import Button from "./Button";
import _ from 'lodash';
import {Button ,Card, Divider, Image, Placeholder } from 'semantic-ui-react';
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

const cards = [
    {
        id: 'offline',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcw2sIjpAfU0ZwkR82mhFEJn5g0Oz1w-v8w&usqp=CAU',
        header: '대면'
    },
    {
        id: 'online',
        avatar: 'https://img.freepik.com/premium-vector/web-conference-icon-vector-webinar-conference-training-icon-internet-teaching-media_158224-289.jpg?w=2000',
        header: '비대면'
    }
    ];


const VoteForm = () => {

    let attend = false;

    const onAttendClicked = (header) => {
        if (header == "대면") {
            attend = true;
        } else if (header == "비대면") {
            attend = false;
        }
    }

    const [voteForm,setVoteForm] = useState({
        "title" : "",
        "content": "",
        "userid" : "",
        "attend" : false
    });

    let [voteResult,setVoteResult] = useState({
        "title" : "",
        "content": "",
        "userid" : "",
        "attend" : false
    })

    const [loading, setLoading] = useState(false);
    const [offlinevote, setOfflinevote] = useState(0);
    const [onlinevote, setOnlinevote] = useState(0);
    const [voted, setVoted] = useState(false);
    

    const submitVote = async (attend) => {
        voteResult.attend = attend;
        await axios
            .post(`http://localhost:8080/cotato/vote/1`,voteResult,{
                withCredentials : true,
                headers : {"Content-Type" : "application/json"}
            })
            .then(
                (response) => {
                    if (response.data == "투표를 완료하였습니다.") {
                        attend == true ? alert("대면으로 투표에 참여하셨습니다.") : alert("비대면으로 투표에 참여하셨습니다.");
                        history.go(-1);
                    } else if( response.data == "이미 참석에 투표하셨습니다.") {
                        alert("이미 대면으로 투표에 참여하셨습니다.");
                    } else if(response.data == "참석으로 투표를 변경하셨습니다.") {
                        alert("대면으로 투표를 변경하셨습니다.");
                        history.go(-1);
                    } else if(response.data == "이미 불참에 투표하셨습니다.") {
                        alert("이미 비대면으로 투표에 참여하셨습니다.");
                    } else if(response.data == "불참으로 투표를 변경하셨습니다.") {
                        alert("비대면으로 투표를 변경하셨습니다.");
                        history.go(-1);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const getUserId = async() => {

        await axios.get(`http://localhost:8080/users/role`,
        {
            withCredentials : true,
            headers : {"Content-Type" : "application/json"}
        }).then((res) => {
            if (res.data.message == "USER NOT AUTHENTICATED") {
                alert('로그인 하지 않은 유저입니다. 로그인을 진행하세요.');
                window.open('http://localhost:3000/login','_self');
            } else {
                voteResult.userid = res.data.data.userId;
    
                    axios.get(`http://localhost:8080/cotato/voate/all`,{
                        withCredentials : false,
                        headers : {"Content-Type" : "application/json"}
                    }).then((res) => {
                    if (res.data.data == null) {
                    alert('등록된 투표 게시물이 없습니다.');
                    history.go(-1);
                } else {
                    setVoteForm(res.data.data);
                    voteResult.title = res.data.data.title;
                    voteResult.content = res.data.data.content;
                }
            });
            }
        })
    }

    const onCancel = () =>{
        // history 객체 사용으로 뒤로 가기
        history.go(-1);
    };

    useEffect(() => {
        getUserId();
    },[])
    
    return (
        <>
            <TitleInput
                placeholder = {voteForm.title}
                name = "title"
                readOnly
            />
            <PlaceInput
                placeholder = {voteForm.content}
                name = "content"
                readOnly
            />
            <VotePostButtonBlock>

            <Divider/>

            <Card.Group doubling itemsPerRow={3} stackable>
                {_.map(cards, (card) => (
                    <Card key={card.header}>
                        {loading ? (
                            <Placeholder>
                                <Placeholder.Image square />
                            </Placeholder>
                        ) : (
                            <Image src={card.avatar} />
                        )}

                        <Card.Content>
                            {loading ? (
                                <Placeholder>
                                    <Placeholder.Header>
                                        <Placeholder.Line length='very short' />
                                        <Placeholder.Line length='medium' />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='short' />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            ) : (
                                <>
                                    <Card.Header>{card.header}</Card.Header>
                                </>
                            )}
                        </Card.Content>

                        <Card.Content extra>
                            <Button primary
                                    onClick = {() => onAttendClicked(card.header)}>
                                투표
                            </Button>
                        </Card.Content>

                    </Card>
                ))}
            </Card.Group>

                <br></br>                
                <StyledButton onClick = {() => submitVote(attend)}>
                    투표 하기
                </StyledButton>
                <StyledButton onClick={onCancel}>취소</StyledButton>
                </VotePostButtonBlock>
        </>
    );
};

export default VoteForm;