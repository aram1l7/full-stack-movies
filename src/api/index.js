import axios from "axios";
let apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_API_URL
    : "http://localhost:4000";
export const getMovies = () => {
  return axios.get(`${apiUrl}/api/movies`);
};

export const getFavorites = () => {
  return axios.get(`${apiUrl}/api/movies/favorites`);
};

export const getMovieById = (id) => {
  return axios.get(`${apiUrl}/api/movies/${id}`);
};

export const createMovie = (data) => {
  return axios.post(`${apiUrl}/api/movies`, { ...data });
};

export const updateMovieById = (id, data) => {
  return axios.put(`${apiUrl}/api/movies/${id}`, data);
};

export const deleteMovieById = (id, username) => {
  return axios.delete(`${apiUrl}/api/movies/${id}/${username}`);
};

export const toggleFavorite = (id, data) => {
  return axios.put(`${apiUrl}/api/movies/toggle-favorite/${id}`, data);
};
