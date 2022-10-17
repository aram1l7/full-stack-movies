import { getMovieById } from "api";
import { getMovies, getFavorites } from "api";
import {
  fetchInitCompleted,
  fetchInitFailed,
  fetchInitRequest,
  fetchMovieCompleted,
  fetchMovieError,
  fetchMovieStart,
} from "./actions";

export const fetchInitDataOperation = () => {
  return async (dispatch) => {
    dispatch(fetchInitRequest(true));
    try {
      const data = await Promise.all([getMovies(), getFavorites()]);

      dispatch(fetchInitCompleted(data));
    } catch (error) {
      dispatch(fetchInitFailed(error));
    }
  };
};

export const fetchMovieDataOperation = (id) => {
  return async (dispatch) => {
    dispatch(fetchMovieStart());
    try {
      const data = await getMovieById(id);

      dispatch(fetchMovieCompleted(data));
    } catch (error) {
      dispatch(fetchMovieError(error));
    }
  };
};
