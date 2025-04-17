import css from './Contact.module.css';
import { ImPhone } from "react-icons/im";
import { IoTrash } from "react-icons/io5";
import { setOpenModal } from '../../redux/contacts/slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Contact ({listElement}) {
  const dispatch = useDispatch(); 
  const { id, name, number } = listElement;
const handleAskDelete = () => {
  dispatch(setOpenModal({ id, name }));
};

return  <div className={css.div}>
            <div className={css.flex}>
                <h3>{name}</h3>
                <p><ImPhone className={css.icon} />{number}</p>
            </div>
            <button className={css.button} type='button' onClick={handleAskDelete}><IoTrash /> Delete</button>
        </div>

}