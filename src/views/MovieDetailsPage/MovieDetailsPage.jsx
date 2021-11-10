import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import * as api from '../../services/movies-api';

export default function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieInfo(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  return (
    MovieDetails && <MovieDetails movieInfo={movieInfo} />)
}
