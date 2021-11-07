import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import * as api from '../../services/movies-api';
// import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState([]);
  const {movieId} = useParams();

  useEffect(() => {
    api.fetchMovieInfo(movieId).then(data => setMovieInfo(data));
  }, [movieId]);

  console.log(movieInfo);

  return (
    <>
       <MovieDetails movieInfo={movieInfo} />
    </>
  );
}
