import {Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Board from './Components/Board';
import VotePage from "./Components/VotePage";
import VoteResult from "./Components/VoteResult";
import VoteCreate from "./Components/VoteCreate";
const App = () => {
    return (
        <>
            <Route component={MainPage} path="/cotato" />
            <Route component={Board} path="/Board" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={VotePage} path="/vote" />
            <Route component={VoteResult} path="/result" />
            <Route component={VoteCreate} path="/votecreate" />
        </>
    );
};
export default App;
