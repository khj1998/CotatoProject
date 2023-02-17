import {Route,Routes} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
import PostList from './Components/PostPage/BoardList/PostList';
import MyPage from './Components/MyPage/MyPage';
import Modify from './Components/Modify';
import WritePage from './write/WritePage';
import PostDetailPage from './Components/PostViewer/PostDetailPage';
import {useState, useCallback} from 'react';

const App = () => {

    return (
        <>
            <Route component={MainPage} path="/cotato" />
            <Route component={PostList} path="/postlist" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={MyPage} path="/mypage"/>
            <Route component = {WritePage} path="/write" exact/>
            <Route component = { PostDetailPage } path = "/:postId" />
        </>
    );
};
export default App;
