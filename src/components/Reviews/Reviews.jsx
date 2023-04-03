import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';

export default function Cast() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h3>User: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
