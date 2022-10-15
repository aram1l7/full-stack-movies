import * as types from "./types";
import { createReducer } from "../../utils/createReducer";

import initialState from "./initialState";

let reducersMap = {
  [types.FETCH_INIT_REQUEST]: (state, action) => {
    return {
      ...state,
      isLoading: action.payload,
    };
  },
  [types.FETCH_INIT_FAILED]: (state, action) => {
    return {
      ...state,
      isError: true,
      error: action.payload,
      isLoading: false,
    };
  },
  [types.FETCH_INIT_COMPLETED]: (state, action) => {
    const data = action.payload;
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      data,
    };
  },
  [types.FETCH_FAVORITES_REQUEST]: (state, action) => {
    return {
      ...state,
      isFavoriteFetching: action.payload,
    };
  },
  [types.FETCH_FAVORITES_FAILED]: (state, action) => {
    return {
      ...state,
      isFavoriteError: true,
      error: action.payload,
      isFavoriteFetching: false,
    };
  },
  [types.FETCH_FAVORITES_COMPLETED]: (state, action) => {
    const favorites = action.payload;
    return {
      ...state,
      isFavoriteSuccess: true,
      isFavoriteFetching: false,
      favorites,
    };
  },
  [types.FILTER_FAVORITES]: (state, action) => {
    return {
      ...state,
      showFavorites: action.payload,
    };
  },
};

export default createReducer(initialState)(reducersMap);
