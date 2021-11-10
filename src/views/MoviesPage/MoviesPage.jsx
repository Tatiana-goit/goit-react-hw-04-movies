import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import Form from '../../components/Form/Form';
import * as api from '../../services/movies-api';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const history = useHistory();
  const search = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    api.featchMovieInSearch(searchQuery).then(data => setMovies(data));
  }, [searchQuery]);

  useEffect(() => {
    if (search !=='')
    api.featchMovieInSearch(search).then(data => setMovies(data));
  }, [search]);

  const handleFormSubmit = searchQuery => {
    history.push({
      pathname: location.pathname,
      search: `?query=${searchQuery}`,
    });
    setSearchQuery(searchQuery);
  };

  return (
    <div>
      <Form onSearch={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
