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

// const BASE_URL = 'http://localhost:4004';

// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

// export function fetchAuthors() {
//   return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`);
// }

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }
