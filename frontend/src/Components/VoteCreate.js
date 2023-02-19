import React from "react";
import styled from "styled-components";
import VotePostButton from "./common/VotePostButton";
import {Link} from "react-router-dom";

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
const VoteCreate = () => {
    return(
       <>
           <TitleInput placeholder="투표 제목을 입력하세요 (ex. 3/3 정기세션 투표)" id="title"/>
           <PlaceInput placeholder="세션 장소를 입력하세요" id="place"/>
           <Link to="/vote"><VotePostButton/></Link>
       </>
    );
};

export default VoteCreate;