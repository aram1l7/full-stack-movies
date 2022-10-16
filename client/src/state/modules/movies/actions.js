import * as types from "./types";

const fetchInitRequest = (bool) => ({
  type: types.FETCH_INIT_REQUEST,
  payload: bool,
});
const fetchInitFailed = (err) => ({
  type: types.FETCH_INIT_FAILED,
  payload: err,
});

const fetchInitCompleted = (data) => ({
  type: types.FETCH_INIT_COMPLETED,
  payload: data,
});

const filterFavorites = (bool) => ({
  type: types.FILTER_FAVORITES,
  payload: bool,
});

const fetchMovieStart = () => ({
  type: types.FETCH_MOVIE_START,
});

const fetchMovieError = (err) => ({
  type: types.FETCH_MOVIE_FAIL,
  payload: err,
});

const fetchMovieCompleted = (data) => ({
  type: types.FETCH_MOVIE_COMPLETED,
  payload: data,
});

const setFilteredMovies = (data) => ({
  type: types.FILTER_MOVIES,
  payload: data,
});

export {
  fetchInitRequest,
  fetchInitFailed,
  fetchInitCompleted,
  filterFavorites,
  fetchMovieError,
  fetchMovieStart,
  fetchMovieCompleted,
  setFilteredMovies,
};
