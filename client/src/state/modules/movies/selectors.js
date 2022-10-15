import { createSelector } from "reselect";

const innerStateSelector = (state) => state.movies;

const movieSelector = createSelector(innerStateSelector, (state) => state.data);
const favoriteSelector = createSelector(
  innerStateSelector,
  (state) => state.showFavorites
);
const favoriteDataSelector = createSelector(
  innerStateSelector,
  (state) => state.favorites
);
export { movieSelector, favoriteSelector, favoriteDataSelector };
