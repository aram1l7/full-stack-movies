import axios from "axios";

export const getMovies = () => {
  return axios.get("/api/movies");
};

export const getFavorites = () => {
  return axios.get("/api/movies/favorites");
};
