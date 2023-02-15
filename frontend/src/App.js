import {Route,Routes} from 'react-router-dom';
import MainPage from './Components/MainPage';
import Login from './Components/Login';
import Register from './Components/Register';
const App = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path="/cotato"></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Register />} path="/register"></Route>
        </Routes>
    );
};
export default App;
