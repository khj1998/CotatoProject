import React from 'react';
import HeaderContainer from './HeaderContainer';
import SearchHeaderTemplate from '../Search/SearchHeaderTemplate';
import PostListTemplate from './PostListTemplate';
import PostViewerContainer from '../../PostViewer/PostViewerContainer';
import Sidebar from './Sidebar';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <Sidebar/>
            <SearchHeaderTemplate/>
            <PostViewerContainer />
            <PostListTemplate />
        </>
    );
};

export default PostListPage;