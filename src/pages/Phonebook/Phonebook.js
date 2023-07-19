import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import css from './Phonebook.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/filter/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const Phonebook = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}> Contacts</h2>
            <Filter />
            <ContactList />
            {!!isLoading && !error && <p>Loading....</p>}
        </div>
    )
};

export default Phonebook;