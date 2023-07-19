import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        // form.reset();
    };

    return (
        <>
        <h2>Log in here</h2>
        <div className={css.container}>
            <form className={css.form}  onSubmit={handleSubmit} autoComplete="off">
                <label className={css.label} >
                    Email
                    <input
                        type="email"
                        name="email"
                        className={css.input}
                        placeholder="Enter email"
                        required />
                </label>
                <label className={css.label} >
                    Password
                    <input
                        type="password"
                        name="password"
                        className={css.input}
                        placeholder="Enter password"
                        required />
                </label>
                <button className={css.button} type="submit">Log In</button>
            </form>
            </div>
        </>
    );
};

export default LoginForm;
