import { useParams } from "react-router-dom";

import { useEffect} from 'react';
import css from './MoviesReviews.module.css';


import {requestsMovieDopInfo} from '../../redux/move/operations';

import { useDispatch, useSelector } from "react-redux";

import {selectLoading, selectError, selectDopInfo} from '../../redux/move/selectors';

export default function MoviesReviews () {
    const loader = useSelector(selectLoading);
    const error = useSelector(selectError);
    const info = useSelector(selectDopInfo);
    const { moviesId } = useParams(); 
    const dispatch = useDispatch(); 
    
useEffect(() => {

  dispatch(requestsMovieDopInfo({ id: moviesId, endpoint: "/reviews" }));
  

}, [dispatch, moviesId]);
    
    return (<div> 
        {loader && <p>Loading...</p>}
        {error && <p>Please, reload the page</p>}
        <ul>
        {info?.results?.length === 0 && <p>No reviews yet</p>}
            {(info.results || []).slice(0, 20).map ((el)=>{
            return <li key={el.id}>
            <h5 className={css.h5}>Author: {el.author}</h5>
            <p className={css.p}>{el.content}</p>
            </li>
        })} 
        </ul>
     
    </div>)
}