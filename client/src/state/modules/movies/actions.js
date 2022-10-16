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

export {
  fetchInitRequest,
  fetchInitFailed,
  fetchInitCompleted,
  filterFavorites,
};
