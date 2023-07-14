import ContactForm from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter";
import css from '../components/App.module.css';


export const HomePage = () => {
    return (
        <div>
            This is homepage, welcome!
            {/* <div className={css.container}>
                <h1>Phonebook</h1>
                <ContactForm />
                <h2> Contacts</h2>
                <Filter />
                <ContactList />
            </div> */}
        </div>
    )
}

