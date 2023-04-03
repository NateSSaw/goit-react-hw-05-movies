import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovie } from 'services/Api';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getPopularMovie().then(({ results }) => setFilms(results));
  }, []);
  console.log(films[0]);
  return (
    <ul>
      {films?.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
