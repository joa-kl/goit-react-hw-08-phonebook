import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import css from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.navUser}>
            <p className={css.userName} >Hi, {user.name}!</p>
            <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};

export default UserMenu;
