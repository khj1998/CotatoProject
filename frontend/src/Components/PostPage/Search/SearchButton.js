import React from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

const SearchButtonArea = styled.div`
    width: 60px;
    float: right;
    transform: translate( 110%, -120%);
    
`;

const Button = styled.button`
    width: 90px;
    height: 40px;
    border-radius: 4px;
    background-color: #C69B7B;
    color: #ffffff;
    outline: none;
    border: none;
    z-index: 2;
    &: hover {
        width: 60px;
        height: 40px;
        border-radius: 4px;
        background-color: #F7CCAC;
        color: #ffffff;
        outline: none;
        border: none;
    }
`;

const SearchButton = () =>{
    return(
        <SearchButtonArea>
            <Button>
                검색
            </Button>
        </SearchButtonArea>
    );
};

export default SearchButton;