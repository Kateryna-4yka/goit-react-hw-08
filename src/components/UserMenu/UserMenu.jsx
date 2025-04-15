import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu () {
const dispatch = useDispatch(); 
function hendalClick () {
    dispatch(logOut())};

return  <div className={css.div} >
            <button className={css.btn} onClick={hendalClick}>Logout</button>
        </div>
}