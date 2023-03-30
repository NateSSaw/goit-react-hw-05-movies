import axios from 'axios';

const API_KEY = 'bf7825decf840602b483780e7dcd93f9';
const API_URL = 'https://api.themoviedb.org/3/';
export default class Api {
  constructor() {
    this.querypage = 1;
    this.query = '';
    this.movieId = '';
  }

  async fetchTrends() {
    const response = await axios.get(
      `${API_URL}trending/movie/day?api_key=${API_KEY}`
    );

    return response;
  }
  async searchMovies() {
    const response = await axios.get(
      `${API_URL}search/movie?api_key=${API_KEY}&query=${this.query}&language=en-US&page=${this.querypage}&include_adult=false`
    );
    this.incrementPage();
    return response;
  }

  async searchMovieId() {
    const response = await axios.get(
      `${API_URL}search/movie/${this.movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  }
  async searchMovieCast() {
    const response = await axios.get(
      `${API_URL}search/movie/${this.movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  }

  async searchMovieReviews() {
    const response = await axios.get(
      `${API_URL}search/movie/${this.movieId}/reviews?api_key=${API_KEY}&language=en-US&page=${this.queryPage}`
    );
    this.incrementPage();
    return response;
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
