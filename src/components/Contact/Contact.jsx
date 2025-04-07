import css from './Contact.module.css';
import { ImPhone } from "react-icons/im";
import { FaCat } from "react-icons/fa";
import {useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/contactsOps';

export default function Contact ({listElement:{name,number,id, avatar}}) {
const dispatch = useDispatch();
return  <div className={css.div}>
            <img className={css.img} src={avatar} width='50px' alt={name} />
            <div className={css.flex}>
                <h2><FaCat className={css.icon} />{name}</h2>
                <p><ImPhone className={css.icon} />{number}</p>
            </div>
            <button className={css.button} type='button' onClick={()=>dispatch (deleteContact(id))}>Delete</button>
        </div>

}