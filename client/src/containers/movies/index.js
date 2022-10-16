import Layout from "layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInitDataOperation } from "state/modules/movies/operations";
import { favoriteSelector } from "state/modules/movies/selectors";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import { movieSelector } from "state/modules/movies/selectors";
import Movies from "views/movies";

class MoviesContainer extends Component {
  componentDidMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
