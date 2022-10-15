import Layout from "layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInitDataOperation } from "state/modules/movies/operations";
import { movieSelector } from "state/modules/movies/selectors";
import Movies from "views/movies";
class MoviesContainer extends Component {
  componentDidMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }
  render() {
    const { movies } = this.props;
    console.log(movies, "movies");
    return (
      <Layout>
        <Movies data={movies} />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: movieSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData: () => dispatch(fetchInitDataOperation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
