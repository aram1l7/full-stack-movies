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

const movieSuccessSelector = createSelector(
  innerStateSelector,
  (state) => state.movieSuccess
);
export {
  moviesSelector,
  favoriteSelector,
  favoriteDataSelector,
  movieDataSelector,
  movieSuccessSelector,
};
