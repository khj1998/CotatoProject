import { useSelector } from 'react-redux';
import Header from '../../Components/common/Header';

const HeaderContainer = () => {
const {user} = useSelector(({user}) => ({user: user.user}));
return <Header user = {user} />;
};
export default HeaderContainer;