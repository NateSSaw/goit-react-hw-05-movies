import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';
import css from './Reviews.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0)
    return <p>We don't have any reviews for this movie.</p>;

  return (
    <ul className={css.list__reviews}>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3 className={css.author}>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
