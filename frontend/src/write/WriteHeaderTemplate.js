import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const WriteHeaderBlock = styled.div`
    color: #AD8B73;
    width: 60%;
    font-size: 25px;
    font-weight: bold;
    text-align: left;
    transform: translate(19%, 0%);
    z-index: -2;
`;

const WriteHeaderTemplate = () => {
    return(
        <WriteHeaderBlock>
            감자에서<br/>
            <br/>회오리 감자가 되는 기적        
        </WriteHeaderBlock>
    );
};

export default WriteHeaderTemplate;