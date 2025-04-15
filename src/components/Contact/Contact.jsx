import css from './Contact.module.css';
import { ImPhone } from "react-icons/im";

import {useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/contacts/operations';

export default function Contact ({listElement:{name,number,id, avatar}}) {
const dispatch = useDispatch();
return  <div className={css.div}>
            <div className={css.flex}>
                <h3>{name}</h3>
                <p><ImPhone className={css.icon} />{number}</p>
            </div>
            <button className={css.button} type='button' onClick={()=>dispatch (deleteContact(id))}>Delete</button>
        </div>

}