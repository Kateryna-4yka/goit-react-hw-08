import { useParams, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {requestsMovieByID} from '../../redux/move/operations';
import { useEffect, useRef, Suspense} from 'react';
import css from './MoviesDetailsPage.module.css';
import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {selectDetails, selectLoading, selectError } from '../../redux/move/selectors';
import { useNavigate } from "react-router-dom";
const buildClass = ({ isActive }) => {return clsx(css.button, isActive && css.active);};

export default function MoviesDetailsPage () {
    const location = useLocation();
    const backLink = useRef(location.state?.from || "/move");
    const { moviesId } = useParams(); 
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(requestsMovieByID({ id: moviesId }));
      }, [dispatch, moviesId]);
  
    const loader = useSelector(selectLoading);
    const error = useSelector(selectError);
    const info = useSelector(selectDetails);

    return <div className={css.content}>
        <Link className={css.button} to={backLink.current}>Go back</Link>
    
        {loader && <p>Loading...</p>}
        {error && <p>Error occurred. Please try again.</p>}

        {info?.id &&  <div className={css.divBox}>
        <img 
            src={`https://image.tmdb.org/t/p/w300${info.poster_path}`} alt={info.title}
            className={css.img}/>
        <div>
        <h3 className={css.h3}>{info.title} ({info.release_date?.substring(0, 4)})</h3>
        <p className={css.p}>User Score: {Math.round(info.vote_average * 10)}%</p>
        <h4>Overview</h4>
        <p className={css.p}>{info.overview}</p>  

        <h4>Genres</h4>
        <ul className={css.ul}>
        {(info.genres || []).map(el=>{
            return <li className={css.p} key={el.id}> {el.name}</li>})} 
        </ul>

        <h4>Original language: {info.original_language}</h4>
        <h4>Country: {info.origin_country}</h4>
        <h4>Production companies: </h4>
        <ul className={css.ul}>
            {(info.production_companies || []).map(el => {
            return <li className={css.liProd}  key={el.id}> {el.name}</li>})}
        </ul>
        </div>
        </div>}

        <div className={css.div}>
        <NavLink className={buildClass} to="cast">Cast</NavLink>
        <NavLink className={buildClass} to="reviews">Rewiews</NavLink>
        </div>
        <Suspense fallback={`Loadinp page...`}>
            <Outlet />
        </Suspense>
</div>
}