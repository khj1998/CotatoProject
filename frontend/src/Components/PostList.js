import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import SearchHeaderTemplate from '../Components/posts/SearchHeaderTemplate';
import PostListTemplate from '../Components/posts/PostListTemplate';



const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <SearchHeaderTemplate/>
            <PostListTemplate />
        </>
    );
};

export default PostListPage;