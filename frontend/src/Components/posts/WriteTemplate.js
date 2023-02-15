import React from 'react';
import styled from 'styled-components';

const WriteTemplateBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: c e n t e r;
    padding-top: 180px;
`;

const WriteTemplate = ({ children }) => {
    return(
        <>
            <WriteTemplateBlock>
                { children }
            </WriteTemplateBlock>
        </>
    );
};

export default WriteTemplate;