import React from 'react';
import HeaderContainer from './HeaderContainer';
import SearchHeaderTemplate from '../Search/SearchHeaderTemplate';
import PostListTemplate from './PostListTemplate';
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