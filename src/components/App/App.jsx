import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError ,selectFilteredContacts, selectAllContacts } from '../../redux/contactsSlice';
export default function App() {
    const dispatch = useDispatch()
    useEffect (()=>{dispatch(fetchContacts())}, [dispatch])
    const allContacts = useSelector (selectAllContacts);


    return  <div className={css.container}>
    <h1 className={css.h1}>Phonebook</h1>
    <h3 className={css.h3}>All contacts: {allContacts}</h3>
    <ContactForm />
    <SearchBox />
    <ContactList />
    </div>
}