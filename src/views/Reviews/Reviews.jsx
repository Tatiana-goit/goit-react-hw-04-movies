import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../services/movies-api';
import ReviewsInformation from '../../components/ReviewsInformation/ReviewsInformation';

export default function Reviews() {
  const [review, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.featchMovieRewiews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
  <ReviewsInformation review={review} />)

}
