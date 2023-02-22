import React, {useState} from 'react';
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


const VoteForm = ({title, content, onChangeField}) => {

    let attend = false;

    const onAttendClicked = (header) => {
        if (header == "대면") {
            attend = true;
        } else if (header == "비대면") {
            attend = false;
        }
    }

    const [voteForm, setVoteForm] = useState(
        {
            "title" : "",
            "content": ""
        });
      
    const onInputChange = (e) => {
        setVoteForm({...voteForm,[e.target.name]:e.target.value});
    }

    const [loading, setLoading] = useState(false);
    const [offlinevote, setOfflinevote] = useState(0);
    const [onlinevote, setOnlinevote] = useState(0);
    const [voted, setVoted] = useState(false);

    const submitVote = (attend) => {
        const userid = localStorage.getItem('Id');
        axios
            .post("http://localhost:8080/cotato/vote/1",voteForm,{
                params : {
                    userid : userid,
                    attend : attend
                }
            })
            .then(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const onCancel = () =>{
        // history 객체 사용으로 뒤로 가기
        history.goBack()
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
                                    onClick = {(e) => onAttendClicked(card.header)}>
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