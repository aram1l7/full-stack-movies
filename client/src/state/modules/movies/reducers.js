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
  [types.FETCH_MOVIE_START]: (state, action) => {
    return {
      ...state,
      movieFetching: true,
    };
  },
  [types.FETCH_MOVIE_FAIL]: (state, action) => {
    return {
      ...state,
      movieFetching: false,
      movieError: true,
      error: action.payload,
    };
  },
  [types.FETCH_MOVIE_COMPLETED]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      movieFetching: false,
      movieError: false,
      movieSuccess: true,
      error: null,
      movie: data,
    };
  },
  [types.FILTER_MOVIES]: (state, action) => {
    const { name, data } = action.payload;
    return {
      ...state,
      [name]: data,
    };
  },
  [types.ADD_MOVIE_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: [...state.data, action.payload],
    };
  },
  [types.UPDATE_MOVIE_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: [...state.data].map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      }),
    };
  },
  [types.DELETE_MOVIE_SUCCESS]: (state, action) => {
    return {
      ...state,
      data: [...state.data].filter((item) => item.id !== action.payload),
    };
  },
};

export default createReducer(initialState)(reducersMap);
