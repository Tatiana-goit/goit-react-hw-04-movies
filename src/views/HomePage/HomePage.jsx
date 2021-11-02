import { useState, useEffect } from 'react';
import * as api from '../../services/movies-api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(data => setMovies(data));
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <MovieList movies={movies} />
    </>
  );
}
