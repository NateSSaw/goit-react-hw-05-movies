import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/Api';
import css from './Movies.module.css';

export default function Movies() {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const search = searchParams.get('name');
    if (search === null) return;
    getSearchMovie(search).then(resp => {
      setSearchFilm(resp.results);
    });
  }, [searchParams]);

  const updateQueryString = query => {
    query.preventDefault();
    const name = query.target.value.trim();
    const nextParams = name !== null && { name };
    setSearchParams(nextParams);
  };
  return (
    <div>
      <form className={css.form} onSubmit={event => event.preventDefault()}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={updateQueryString}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      {searchFilm.length > 0 ? (
        <ul className={css.list}>
          {searchFilm?.map(({ id, poster_path, title }) => (
            <li key={id}>
              <Link
                to={`${id}`}
                state={{ from: location }}
                className={css.list__item}
              >
                <p> {title}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
