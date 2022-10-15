import { createSelector } from "reselect";

const innerStateSelector = (state) => state.movies;

const movieSelector = createSelector(innerStateSelector, (state) => state.data);

export { movieSelector };
