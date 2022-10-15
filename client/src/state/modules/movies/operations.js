import { getMovies } from "api";
import {
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
