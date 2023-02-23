import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input';
import SearchButton from'./SearchButton';
import axios from 'axios';

const SearchBarArea = styled.div`
    float: left;
    width: 80%;
    transform: translate(0%, -130%);
    z-index: 1;
`;

const SearchBar = () => {

    const [search,setSearch] = useState({
        searchBar : ''
    });

    const onInputChange = (e) => {
        setSearch({...search,[e.target.name]:e.target.value});
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.get(`http://localhost:8080/boards/search`,{
            params : {
                keyword : search.searchBar
            }
        },
        {
            withCredentials: false,
            headers : {"Content-Type" : "application/json"}
        }).then((res) => {
            console.log(res);
        });
    }   
    
    return(
        <SearchBarArea>
            <form onSubmit={(e) => onSubmit(e)}>
            <Input
                name="searchBar"
                type="text"
                placeholder="키워드를 입력해주세요"
                onChange = {(e) => onInputChange(e)}
            />
            <SearchButton />
            </form>
        </SearchBarArea>
        
    );
};

export default SearchBar;