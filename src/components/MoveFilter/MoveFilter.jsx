import { useEffect, useRef } from 'react';
import css from './MoveFilter.module.css';
import { fetchMovies, filterByName } from '../../redux/move/operations';
import MovieList from '../MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { selectError, selectFilter, selectLoading } from '../../redux/move/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function MoveFilter() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const queryArray = useSelector(selectFilter);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const inputRef = useRef(null); 

  useEffect(() => {
    if (query) {
      dispatch(filterByName(query));
    } else {
      dispatch(fetchMovies());
    }
  }, [query, dispatch]);

  const handelSubmit = (event) => {
    event.preventDefault();
    const searchWord = event.target.elements.word.value.trim();
    if (!searchWord) return;
    const nextParams = new URLSearchParams();
    nextParams.set('query', searchWord);
    setSearchParams(nextParams);
    
  };

  const handleClear = () => {
    setSearchParams({}); 
    dispatch(fetchMovies()); 

    if (inputRef.current) {
      inputRef.current.value = ''; 
    }
  };

  return (
    <div>
      <form className={css.form} onSubmit={handelSubmit}>
        <input
          className={css.input}
          name="word"
          type="text"
          defaultValue={query}
          ref={inputRef} 
          placeholder="movie search..."
        />
        <button className={css.btn} type="submit" disabled={loader}>
          Search
        </button>

      <button className={css.btn} onClick={handleClear} type="button" disabled={loader}>
        Clean
      </button>
      </form>

      {error && <p>Error occurred. Please try again.</p>}
      {queryArray && queryArray.length > 0 && <MovieList info={queryArray} />}

{query && queryArray && queryArray.length === 0 && (
  <><h3 className={css.notFound}>Nothing found for your request:</h3><p>{query}</p></>
)}
    </div>
  );
}
