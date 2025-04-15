import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectLoading, selectError ,selectFilteredContacts, } from '../../redux/contacts/selectors';

export default function ContactList () {

const list = useSelector (selectFilteredContacts);
const loader = useSelector (selectLoading);
const error = useSelector (selectError);

return <>
{loader && <p>Loading, plz pagajdite</p>}
{error && <p>Error</p>}
<ul className={css.ul}>
    {list.length >0 && list.map((el)=>{
        return <li key={el.id}>
                    <Contact listElement={el} />
                </li>})}
</ul></>}