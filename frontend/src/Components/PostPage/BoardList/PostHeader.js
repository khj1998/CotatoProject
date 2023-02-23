import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const HeaderBlock = styled.div`
    display: flex;
    padding: 40px;
    align-items: center;
    justify-content: center;
`;

const ButtonBlock = styled.div`
    display: flex;
    width: 40%;
    justify-content: flex-start;
    transform: translate(-40%, -500%);
    color: #C69B7B;
`;

const BorderButton = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 30px;
    border: 2px solid ${palette.gray[1]};
    color: ${palette.gray[1]};
    background-color: #ECDBBA;
    font-size: 20px;
    font-weight: bold;
    
    &: hover {
        width: 100px;
    height: 50px;
    border-radius: 30px;
    border: 2px solid ${palette.gray[1]};
    color: ${palette.gray[1]};
    background-color: #FFE9B1;
    font-size: 20px;
    font-weight: bold;
    
    }
    
`;

const ClassificationBlock = styled.div`
    display: flex;
    width: 40%;
    justify-content: flex-end;
    align-items: center;
    
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
        background-color: #FFE9B1;
        color: #ffffff;
        outline: none;
        border: none;
    }
`;


const StyledClassification = styled(Select)`
    width: 200px;
    transform: translate(%, -400%);
`;

const PostHeader = () => {
    const [option, setOption] = useState('');
    const options = [
        { value: 'ALL', label: '전체' },
        { value: 'RECRUITMENT', label: '모집 게시물' },
        { value: 'REQUESTING', label: '일반 게시물' }
    ];

    const onSelect = (value) => {
        setOption(value);
    };

    return(
        <HeaderBlock>
            <ButtonBlock>
                <BorderButton>
                    <Link to="/write">
                        글쓰기
                    </Link>
                </BorderButton>
            </ButtonBlock>
          
        </HeaderBlock>
    );
};

export default PostHeader;