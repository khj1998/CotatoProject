import {Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Board from './Components/Board';
import VoteResult from "./Components/VoteResult";
import PostList from './Components/PostPage/BoardList/PostList';
import MyPage from './Components/MyPage/MyPage';
import WritePage from './write/WritePage';
import Modify from './Components/Modify'
import Vote from "./Components/Vote";
import DoVote from './Components/DoVote';
import CalendarView from './Components/calendar/CalendarView';
import Home from './Components/main/Home';
import ModifyUserInfo from './Components/ModifyUserInfo';
import BoardPost from './write/BoardPost';

const App = () => {

    return (
        <>
            <Route component={MainPage} path="/cotato" />
            <Route component={Board} path="/board" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={VoteResult} path="/result" />
            <Route component={PostList} path="/postlist" />
            <Route component={MyPage} path="/mypage"/>
            <Route component={WritePage} path="/write" exact/>
            <Route component={Modify} path = "/modify"/>
            <Route component={ModifyUserInfo} path="/modify/user/info"/>
            <Route component={Vote} path="/vote/create" exact/>
            <Route component={DoVote} path="/vote" exact/>
            <Route component={CalendarView} path="/calendar" />
            <Route component={Home} path="/home" />
            <Route component={BoardPost} path="/board/post/:boardPostId" exact/>
        </>
    );
};
export default App;
