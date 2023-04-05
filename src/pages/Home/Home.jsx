import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovie } from 'services/Api';
import css from './Home.module.css';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPopularMovie().then(({ results }) => setFilms(results));
  }, []);

  return (
    <ul className={css.movies_list}>
      {films.length > 0
        ? films.map(({ id, title }) => (
            <li key={id} className={css.movie}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))
        : null}
    </ul>
  );
}
