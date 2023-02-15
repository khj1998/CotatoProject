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
        <Routes>
            <Route element={<MainPage />} path="/cotato"></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Register />} path="/register"></Route>
            <Route element={<PostList />} path="/PostList"></Route>
            <Route element={<Modify />} path="/modify"/>
            <Route element={<MyPage />} path="/mypage"/>
            <Route element={<WritePage />} path="/write" exact/>
            <Route element={<PostDetailPage /> } path = "/:postId" />
        </Routes>
    );
};
export default App;
