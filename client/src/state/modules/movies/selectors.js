import { createSelector } from "reselect";

const innerStateSelector = (state) => state.movies;

const moviesSelector = createSelector(
  innerStateSelector,
  (state) => state.data
);
const favoriteSelector = createSelector(
  innerStateSelector,
  (state) => state.showFavorites
);
const favoriteDataSelector = createSelector(
  innerStateSelector,
  (state) => state.favorites
);

const movieDataSelector = createSelector(
  innerStateSelector,
  (state) => state.movie
);

export {
  moviesSelector,
  favoriteSelector,
  favoriteDataSelector,
  movieDataSelector,
};
