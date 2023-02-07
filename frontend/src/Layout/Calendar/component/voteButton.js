import styled from "styled-components";
import { Link } from "react-router-dom";

const voteB=styled.button`
    border:none;
    border-radius:4px;
    font-size:1rem;
    font-weigth:bold;
    padding:0.25rem 1rem;
    color:white;
    outline:none;
    cursor:pointer;

    background:#000000;
    &:hover{
        background:#BDBDBD;
    }
`;

//const voteButton= props=><voteB {...props}/>
const voteButton=()=>{
    return(
    <div>
        <a href = "https://cafe.naver.com/cotato" target="_blank">
          <voteB>
            투표하기
          </voteB>
        </a>
        </div>
    );
};

export default voteButton;