import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';
import { useEffect} from 'react';
import css from './ContactsPage.module.css';

export default function ContactsPage () {
    
    const dispatch = useDispatch()
    useEffect (()=>{dispatch(fetchContacts())}, [dispatch])
    const allContacts = useSelector (selectAllContacts);

    return   <div className={css.div}>
        <h3>Contacts Book</h3>
        <p>All contacts: {allContacts}</p>
        <ContactForm />
        <SearchBox />
        <ContactList />
    </div>
}