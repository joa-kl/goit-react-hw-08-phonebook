// import ContactForm from "components/ContactForm/ContactForm"
// import { ContactList } from "components/ContactList/ContactList"
// import { Filter } from "components/Filter/Filter";

const styles = {
    container: {
        // height: '100%',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        justifyContent: 'center',
        // backgroundColor: 'teal'
    },
    title: {
        fontWeight: 500,
        fontSize: 40,
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
