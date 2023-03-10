import React from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';
import SearchBarTemplate from './SearchBarTemplate';

const HeaderTemplateBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 150px;
    width: 90%;
`;

const SearchHeaderTemplate = () => {
    return(
        <HeaderTemplateBlock>
            <SearchBarTemplate />
        </HeaderTemplateBlock>
    );
};

export default SearchHeaderTemplate;