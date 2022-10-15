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
};

export default createReducer(initialState)(reducersMap);
