/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';
import * as api from '../../services/movies-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, useSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') return;
    api.featchMovieInSearch(searchQuery).then(data => setMovies(data));
  }, [searchQuery]);

  const handleFormSubmit = filmName => {
    useSearchQuery(filmName);
  };

  return (
    <>
      <Form onSearch={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
}
