import axios from "axios";

export const getMovies = () => {
  return axios.get("/api/movies");
};

export const getFavorites = () => {
  return axios.get("/api/movies/favorites");
};

export const getMovieById = (id) => {
  return axios.get(`/api/movies/${id}`);
};

export const createMovie = (data) => {
  return axios.post("/api/movies", { ...data });
};

export const updateMovieById = (id, data) => {
  return axios.put(`/api/movies/${id}`, data);
};

export const deleteMovieById = (id, username) => {
  return axios.delete(`/api/movies/${id}/${username}`);
};

export const toggleFavorite = (id, data) => {
  return axios.put(`/api/movies/toggle-favorite/${id}`, data);
};
