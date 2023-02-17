import React from 'react';
import HeaderTemplate from '../Components/common/HeaderTemplate';
import WriteHeaderTemplate from './WriteHeaderTemplate';
import WriteTemplate from './WriteTemplate';
import WriteContainer from './WriteContainer';

const WritePage = () => {
    return(
        <>
            <HeaderTemplate />
            <WriteTemplate>
                <WriteHeaderTemplate />
                <WriteContainer />
            </WriteTemplate>
        </>
    );
};

export default WritePage;