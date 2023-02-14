import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import SearchHeaderTemplate from '../Components/posts/SearchHeaderTemplate';
import PostListTemplate from '../Components/posts/PostListTemplate';

import Sidebar from './Sidebar';



const PostListPage = () => {
    return (
        <>


            <HeaderContainer />
            <Sidebar/>

            <SearchHeaderTemplate/>

            <PostListTemplate />
        </>
    );
};

export default PostListPage;