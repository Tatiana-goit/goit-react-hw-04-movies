import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import s from './Reviews.module.css';

export default function Reviews() {
  const [review, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieRewiews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <div className={s.review}>
      {review && review.length > 0 ? (
        <ul className={s.list}>
          {review.map(({ id, author, content }) => (
            <li key={id} className={s.item}>
              <p className={s.author}>{author}</p>
              <p className={s.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.error}>Not information </p>
      )}
    </div>
  );
}
