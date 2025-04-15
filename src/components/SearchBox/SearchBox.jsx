import css from './SearchBox.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {changeFilter } from '../../redux/filters/slice';

import {selectNameFilter} from '../../redux/filters/selectors';

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