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
      const data = await Promise.all([getMovies(), getFavorites()]);

      dispatch(fetchInitCompleted(data));
    } catch (error) {
      dispatch(fetchInitFailed(error));
    }
  };
};
