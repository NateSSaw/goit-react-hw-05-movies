import axios from 'axios';

const API_KEY = 'bf7825decf840602b483780e7dcd93f9';
const API_URL = 'https://api.themoviedb.org/3/';

async function getPopularMovie() {
  try {
    const response = await axios.get(
      `${API_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovie(search) {
  try {
    const response = await axios.get(
      `${API_URL}search/movie?api_key=${API_KEY}&query=${search}&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(search) {
  try {
    const response = await axios.get(
      `${API_URL}movie/${search}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCast(id) {
  try {
    const response = await axios.get(
      `${API_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(id) {
  try {
    const response = await axios.get(
      `${API_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
export {
  getPopularMovie,
  getSearchMovie,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
