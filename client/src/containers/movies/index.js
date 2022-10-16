import Layout from "layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFavorites } from "state/modules/movies/actions";
import { fetchInitDataOperation } from "state/modules/movies/operations";
import { favoriteSelector } from "state/modules/movies/selectors";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import { moviesSelector } from "state/modules/movies/selectors";
import Movies from "views/movies";

class MoviesContainer extends Component {
  componentDidMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }
  render() {
    const { movies, isFavorites, favorites, setIsFavorites } = this.props;
    return (
      <Layout>
        <Movies
          setIsFavorites={setIsFavorites}
          isFavorites={isFavorites}
          data={isFavorites ? favorites : movies}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: moviesSelector(state),
  isFavorites: favoriteSelector(state),
  favorites: favoriteDataSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => dispatch(fetchInitDataOperation()),
  setIsFavorites: (bool) => dispatch(filterFavorites(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
