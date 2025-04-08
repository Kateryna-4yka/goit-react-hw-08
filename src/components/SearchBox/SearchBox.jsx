import css from './SearchBox.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilter, selectNameFilter } from '../../redux/filters/slice';

export default function SearchBox () {

const dispatch = useDispatch ();
const value = useSelector(selectNameFilter);

return <div className={css.div}>
<label className={css.label} >Find contacts by name or numbers</label>
<input className={css.input} 
    name='userFind'
    value={value}
    onChange={(event)=>{
        dispatch(changeFilter(event.target.value));}}
/>
</div>

}