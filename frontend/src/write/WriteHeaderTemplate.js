import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';

const WriteHeaderBlock = styled.div`
    color: ${ palette.blue[2] };
    width: 60%;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;

const WriteHeaderTemplate = () => {
    return(
        <WriteHeaderBlock>
            감자에서<br/>
            회오리 감자가 되는 기적        </WriteHeaderBlock>
    );
};

export default WriteHeaderTemplate;