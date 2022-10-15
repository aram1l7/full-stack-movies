import { getMovies, getFavorites } from "api";
import {
  fetchFavoriteCompleted,
  fetchFavoriteFailed,
  fetchFavoriteRequest,
  fetchInitCompleted,
  fetchInitFailed,
  fetchInitRequest,
} from "./actions";

export const fetchInitDataOperation = () => {
  return async (dispatch) => {
    dispatch(fetchInitRequest(true));
    try {
      const { data } = await getMovies();
      dispatch(fetchInitCompleted(data));
    } catch (error) {
      dispatch(fetchInitFailed(error));
    }
  };
};

export const fetchFavoritesData = () => {
  return async (dispatch) => {
    dispatch(fetchFavoriteRequest(true));
    try {
      const { data } = await getFavorites();
      dispatch(fetchFavoriteCompleted(data));
    } catch (error) {
      dispatch(fetchFavoriteFailed(error));
    }
  };
};
