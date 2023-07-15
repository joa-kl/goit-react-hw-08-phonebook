import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import css from './Navigation.module.css';

const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink  to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink  to="/phonebook">
                    Phonebook
                </NavLink>
            )}
        </nav>
    );
};


export default Navigation;