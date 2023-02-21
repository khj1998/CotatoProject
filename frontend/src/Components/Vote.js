import React from "react";
import VoteCreateFormContainer from "../containers/vote/VoteCreateFormContainer";
import VotePostButtonContainer from "../containers/vote/VotePostButtonContainer";
import VotePage from "./VotePage";

const Vote = () => {

    return(
       <>
           <VoteCreateFormContainer /> <br/>
           <VotePage/>
           <VotePostButtonContainer/>
       </>
    );
};

export default Vote;