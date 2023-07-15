import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import useAuth from '../../hooks/useAuth';
// import css from './AppBar.module.css';

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            {/* {isLoggedIn ? <div>YES</div> : <div>NO</div>} */}
        </header>
    );
};

export default AppBar;