import {Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
import PostList from './Components/PostList';
import MyPage from './Components/MyPage';
import Modify from './Components/Modify';
import WritePage from './Components/WritePage';
import PostDetailPage from './Components/PostDetailPage';

const App = () => {
    return (
        <>
            <Route component={MainPage} path="/cotato" />
            <Route component={PostList} path="/PostList" />
            <Route component = {Modify} path="/modify"/>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={MyPage} path="/mypage"/>
            <Route component = {WritePage} path="/write" exact/>
            <Route component = { PostDetailPage } path = "/:postId" />
        </>
    );
};
export default App;
