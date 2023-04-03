import { useEffect, useRef, useState, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/Api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState('');
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId).then(setFilm);
  }, [movieId]);
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    overview,
    vote_average: voteAverage,
    genres,
  } = film;
  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
      ></img>
      <h2>{title}</h2>
      <p>User score: {voteAverage}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres?.reduce((acc, genre) => acc + genre.name + ' ', '')}</p>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
