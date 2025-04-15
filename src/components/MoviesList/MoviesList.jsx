import {Link} from 'react-router-dom';
import { useLocation } from "react-router";
import css from './MoviesList.module.css';

export default function MoviesList ({info}) {
const location = useLocation();

return (
    <ul className={css.ul}>
      {info.map((el) => (
        <li key={el.id} className={css.li}>
          <Link to={`/move/${el.id}`} state={{ from: location.pathname }}>
            {el.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                alt={el.title}
                className={css.img}
              />
            )}
            <h3 className={css.h3}>{el.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );}