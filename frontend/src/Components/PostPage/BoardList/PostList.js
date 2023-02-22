import React from 'react';
import HeaderContainer from './HeaderContainer';
import SearchHeaderTemplate from '../Search/SearchHeaderTemplate';
import PostListTemplate from './PostListTemplate';
import Sidebar from './Sidebar';
import PostList from '../../../postList/PostList';
import PostListContainer from '../../../postList/PostListContainer';


const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <SearchHeaderTemplate/>
            <PostList />
         
        </>
    );
};

export default PostListPage;