import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <>
        <h2>Register here</h2>
        <div className={css.container}>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={css.label}>
                Username
                <input
                    type="text"
                    name="name"
                    className={css.input}
                    placeholder="Enter username"
                    title="Enter your username. Field required."
                    required />
            </label>
            <label className={css.label}>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    title="Enter your email address. Field required."
                    className={css.input}
                    required />
            </label>
            <label className={css.label}>
                Password
                <input
                    type="password"
                    name="password"
                    className={css.input}
                    placeholder="Enter password"
                    pattern=".{7,}"
                    title="Your password must contain at least 7 characters."
                    required />
            </label>
            <button className={css.button} type="submit">Register</button>
            </form>
            </div>
        </>
    );
};

export default RegisterForm;