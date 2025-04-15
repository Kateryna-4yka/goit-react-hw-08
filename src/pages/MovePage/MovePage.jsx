import css from './MovePage.module.css';
import {useEffect} from 'react';
import {fetchMovies} from '../../redux/move/operations';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import {selectMove, selectLoading, selectError } from '../../redux/move/selectors';


export default function MovePage () {
const dispatch = useDispatch(); 
useEffect (()=>{dispatch(fetchMovies())}, [dispatch]);
const loader = useSelector(selectLoading);
const error = useSelector(selectError);
const info = useSelector(selectMove);

return <div>
        <h3 className={css.h3}>Trending today</h3>
        {loader && <p>Loading...</p>}
        {error && <p>Please, reload the page</p>}
        {info.length >0 && <MoviesList info={info}/>}
    </div>
}