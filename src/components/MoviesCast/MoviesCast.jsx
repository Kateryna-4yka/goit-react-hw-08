import { useParams } from "react-router-dom";
import {requestsMovieDopInfo} from '../../redux/move/operations';
import { useEffect} from 'react';
import css from './MoviesCast.module.css';
import { useDispatch, useSelector } from "react-redux";

import { selectLoading, selectError, selectDopInfo } from '../../redux/move/selectors';

export default function MoviesCast () {

const loader = useSelector(selectLoading);
const error = useSelector(selectError);
const info = useSelector(selectDopInfo);
const { moviesId } = useParams(); 
const dispatch = useDispatch(); 

useEffect(() => {

  dispatch(requestsMovieDopInfo({ id: moviesId, endpoint: "/credits" }));
  }, [dispatch, moviesId]);

return (<div>
        {loader && <p>Loading...</p>}
        {error && <p>Please, reload the page</p>}
        {info?.cast?.length === 0 && <p>The list of actors is missing</p>}
        <ul className={css.ul}>
        {(info.cast || []).slice(0, 20).map ((el)=>{
        return <li  className={css.li} key={el.id}>
          {el.profile_path && (
                <img
                  className={css.img}
                  src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
                  alt={el.name}
                />
              )}
            <h5 className={css.h5}>{el.name}</h5>
            <p className={css.p}>Character: {el.character}</p>
            </li>
        })} 

        </ul>

        
        
</div>)

                }