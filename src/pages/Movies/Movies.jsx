import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/Api';

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
    const name = query.target.value;
    const nextParams = name !== '' && { name };
    setSearchParams(nextParams);
  };
  return (
    <div>
      <form onSubmit={event => event.preventDefault()}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchParams.get('name')}
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      {searchFilm.length > 0 ? (
        <ul>
          {searchFilm?.map(({ id, poster_path, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                ></img>
                <p> {title}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
