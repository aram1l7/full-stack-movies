import axios from "axios";

export const getMovies = () => {
  return axios.get("/api/movies");
};
