import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);
  console.log(cast);

  return (
    <ul>
      {cast.map(({ name, id, profile_path, character }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            ></img>
            <h4>{name}</h4>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
}
