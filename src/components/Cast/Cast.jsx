import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import css from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={css.cast__list}>
      {cast.map(({ name, id, profile_path, character }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png`
              }
              alt={name}
              width="200"
              height="300"
            ></img>
            <h4>{name}</h4>
            <p> as: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
