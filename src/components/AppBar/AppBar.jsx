import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';


export default function AppBar () {

    const isLoggedId = useSelector(selectIsLoggedIn);

return <header className={css.div}>  
    <Navigation />
    {isLoggedId? <UserMenu /> : <AuthNav />}       
</header>
}