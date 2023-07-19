import css from "./Home.module.css";


const Home = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>Welcome to your phonebook app!</h1>
            <p className={css.subtitle}>The easiest access to all your contacts. Just log in or register!</p>
        </div>
    );
}

export default Home;
