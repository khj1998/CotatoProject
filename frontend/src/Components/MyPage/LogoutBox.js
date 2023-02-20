import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    align-items: center
    margin-left: 20%;
    width: 30%;
`;

const LogoutBox = ({ children }) => {
    return(
        <Box>
            { children }
        </Box>
    );
};

export default LogoutBox;