import React from 'react';
import HeaderTemplate from '../Components/common/HeaderTemplate';
import WriteHeaderTemplate from '../Components/posts/WriteHeaderTemplate';
import WriteTemplate from '../Components/posts/WriteTemplate';
import WriteContainer from '../Components/posts/WriteContainer';


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