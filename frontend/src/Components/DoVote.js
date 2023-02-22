import React from "react";
import VoteFormContainer from "../containers/vote/VoteFormContainer";
import axios from 'axios';

const getVotePost = async () => {
    await axios.get(`http://localhost:8080/cotato/voate/all`,{
        withCredentials : false,
        headers : {"Content-Type" : "application/json"}
    }).then((res) => {
        console.log(res.data);
    })
}

const DoVote = () => {
    getVotePost();
    return (
        <>
            <VoteFormContainer /> <br/>
        </>
    )
}

export default DoVote;