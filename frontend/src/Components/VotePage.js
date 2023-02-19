import React, {useState} from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";

//투표 카드
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

const VotePage = () => {
    const [loading, setLoading] = useState(false);
    const [offlinevote, setOfflinevote] = useState(0);
    const [onlinevote, setOnlinevote] = useState(0);
    const [voted, setVoted] = useState(false);

    const submitVote = () => {
        axios
            .post("http://localhost:8080/vote", {
                offline:offlinevote,
                online: onlinevote,
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

    return (
        <>

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
                            <Button disabled={voted}
                                    onClick={ () => [
                                        card.id === 'offline' ? setOfflinevote(offlinevote+1)
                                            : setOnlinevote(onlinevote+1), setVoted(true)
                                    , submitVote()]}
                                    primary>
                                투표
                            </Button>
                            <Button
                                disabled={
                                    (card.id === 'offline' && offlinevote <=0)  ||
                                    (card.id === 'online' && onlinevote <=0)
                                }
                                onClick={ () => [card.id === 'offline' ? setOfflinevote(offlinevote-1)
                                : setOnlinevote(onlinevote-1), setVoted(false), submitVote()]}>
                                투표 취소
                            </Button>
                        </Card.Content>

                    </Card>
                ))}
            </Card.Group>
        </>
    );
};

export default VotePage;