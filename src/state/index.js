import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./modules";
import logger from "redux-logger";

function configureStore(initialState) {
  const rootReducer = combineReducers({
    ...reducers,
  });
  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore();
