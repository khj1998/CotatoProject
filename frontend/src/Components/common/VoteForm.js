import React, {useState} from 'react';
import styled from "styled-components";
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

    let voteForm = {
        "title" : localStorage.getItem("title"),
        "content": localStorage.getItem("content"),
        "userid" : localStorage.getItem("Id"),
        "attend" : false
    }

    const [loading, setLoading] = useState(false);
    const [offlinevote, setOfflinevote] = useState(0);
    const [onlinevote, setOnlinevote] = useState(0);
    const [voted, setVoted] = useState(false);
    const [btnactiveA, setBtnactiveA] = useState(false);
    const [btnactiveB, setBtnactiveB] = useState(false);


    const submitVote = async (attend) => {
        voteForm.attend = attend;
        await axios
            .post("http://localhost:8080/cotato/vote/1",voteForm,{
                withCredentials : true,
                headers : {"Content-Type" : "application/json"}
            })
            .then(
                (response) => {
                    if (response.data == "투표를 완료하였습니다.") {
                        attend == true ? alert("대면으로 투표에 참여하셨습니다.") : alert("비대면으로 투표에 참여하셨습니다.");
                        window.open('http://localhost:3000/cotato','_self');
                    } else if( response.data == "이미 참석에 투표하셨습니다.") {
                        alert("이미 대면으로 투표에 참여하셨습니다.");
                    } else if(response.data == "참석으로 투표를 변경하셨습니다.") {
                        alert("대면으로 투표를 변경하셨습니다.");
                        window.open('http://localhost:3000/cotato','_self');
                    } else if(response.data == "이미 불참에 투표하셨습니다.") {
                        alert("이미 비대면으로 투표에 참여하셨습니다.");
                    } else if(response.data == "불참으로 투표를 변경하셨습니다.") {
                        alert("비대면으로 투표를 변경하셨습니다.");
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
        window.open('http://localhost:3000/cotato','_self');
    };
    
    return (
        <>
            <TitleInput
                placeholder = {localStorage.getItem("title")}
                name = "title"
                readOnly
            />
            <PlaceInput
                placeholder = {"장소 : "+localStorage.getItem("content") == null ? "":localStorage.getItem("content")}
                name = "content"
                readOnly
            />
            <VotePostButtonBlock>

            대면:{offlinevote} / 비대면: {onlinevote}
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
                                    disabled={card.id==='offline'?btnactiveA:btnactiveB}
                                    onClick = {() =>
                                        [card.id==='offline'?[setBtnactiveA(true),setBtnactiveB(false)]:[setBtnactiveB(true),setBtnactiveA(false)],
                                        onAttendClicked(card.header)]}>
                                투표
                            </Button>
                        </Card.Content>

                    </Card>
                ))}
            </Card.Group>

                <br></br>                
                <StyledButton onClick = {() => [submitVote(attend), setBtnactiveA(false), setBtnactiveB(false)]}>
                    투표 하기
                </StyledButton>
                <StyledButton onClick={onCancel}>취소</StyledButton>
                </VotePostButtonBlock>
        </>
    );
};

export default VoteForm;