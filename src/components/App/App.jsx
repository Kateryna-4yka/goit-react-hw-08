import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/slice';
import { Routes, Route } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage';
import Layout from '../Layout/Layout';

export default function App() {

    const dispatch = useDispatch()
    useEffect (()=>{dispatch(fetchContacts())}, [dispatch])
    const allContacts = useSelector (selectAllContacts);


    return  <div className={css.container}>

    {/* <h1 className={css.h1}>Phonebook</h1>
    <h3 className={css.h3}>All contacts: {allContacts}</h3>
    <ContactForm />
    <SearchBox />
    <ContactList /> */}


    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />

      </Route>

    </Routes>


    </div>
}