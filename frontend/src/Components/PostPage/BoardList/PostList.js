import React from 'react';
import HeaderContainer from './HeaderContainer';
import SearchHeaderTemplate from '../Search/SearchHeaderTemplate';
import PostListTemplate from './PostListTemplate';
import Sidebar from './Sidebar';
import PostHeader from './PostHeader';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <Sidebar/>
            <SearchHeaderTemplate/>
            <PostHeader />
            <PostListTemplate />
        </>
    );
};

export default PostListPage;