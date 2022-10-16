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
    const movies = action.payload[0].data;
    const favorites = action.payload[1].data;
    return {
      ...state,
      isSuccess: true,
      isLoading: false,
      data: movies,
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
