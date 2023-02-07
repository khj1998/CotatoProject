import {Route} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
const App = () => {
    return (
        <>
            <Route component={MainPage} path="/cotato" />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
        </>
    );
};
export default App;
