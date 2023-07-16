// import ContactForm from "components/ContactForm/ContactForm"
// import { ContactList } from "components/ContactList/ContactList"
// import { Filter } from "components/Filter/Filter";

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};


const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to your phonebook app!</h1>
        </div>
    );
}

export default Home;
