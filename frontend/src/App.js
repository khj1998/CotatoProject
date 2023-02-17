import {Route,Routes} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
import PostList from './Components/PostList';
import MyPage from './Components/MyPage';
import Modify from './Components/Modify';
import WritePage from './Components/WritePage';
import PostDetailPage from './Components/PostDetailPage';
import {useState, useCallback} from 'react';

import Categories from './Components/Categories';
import { element } from 'prop-types';

const App = () => {

    return (
        <>
            <Route component={MainPage} path="/cotato" />
            <Route component={PostList} path="/postlist" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Modify} path="/modify" />
            <Route component={MyPage} path="/mypage" />
            <Route component={WritePage} path="/write" exact />
            <Route component={PostDetailPage} path = "/:postId" />
        </>
    );
};
export default App;
