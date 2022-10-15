import Layout from "layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchInitDataOperation,
  fetchFavoritesData,
} from "state/modules/movies/operations";
import { favoriteSelector } from "state/modules/movies/selectors";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import { movieSelector } from "state/modules/movies/selectors";
import Movies from "views/movies";

class MoviesContainer extends Component {
  componentDidMount() {
    const { fetchInitialData, filterFavorites } = this.props;
    fetchInitialData();
    filterFavorites();
  }
  render() {
    const { movies, isFavorites, favorites } = this.props;
    return (
      <Layout>
        <Movies
          isFavorites={isFavorites}
          data={isFavorites ? favorites : movies}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: movieSelector(state),
  isFavorites: favoriteSelector(state),
  favorites: favoriteDataSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => dispatch(fetchInitDataOperation()),
  filterFavorites: () => dispatch(fetchFavoritesData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
