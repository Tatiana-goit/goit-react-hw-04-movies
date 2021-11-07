// c7505a6b0a7307c8877073e2c17e5b03
// https://api.themoviedb.org/3/movie/550?api_key=c7505a6b0a7307c8877073e2c17e5b03
import axios from 'axios';

const API_KEY = 'c7505a6b0a7307c8877073e2c17e5b03';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchPopularMovies() {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

export async function featchMovieInSearch(searchQuery) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
    );
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}

export async function fetchMovieInfo(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    alert(error.message);
  }
}

export async function featchMovieCast(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return response.data.cast;
  } catch (error) {
    alert(error.message)
  }
}

export async function featchMovieRewiews(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    alert(error.message);
  }
}
