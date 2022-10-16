import Modal from "components/modal";
import Layout from "layout";
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFavorites } from "state/modules/movies/actions";
import { fetchInitDataOperation } from "state/modules/movies/operations";
import { favoriteSelector } from "state/modules/movies/selectors";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import { moviesSelector } from "state/modules/movies/selectors";
import { formatDate } from "utils/formatDate";
import AddEditMovieForm from "views/add-edit-movie";
import Movies from "views/movies";

class MoviesContainer extends Component {
  componentDidMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }
  state = {
    editModalOpen: false,
    formData: {},
    showUsernameModal: false,
  };
  onSubmit = (data) => {
    console.log(data, "data");
  };
  render() {
    const { movies, isFavorites, favorites, setIsFavorites } = this.props;
    const { formData, editModalOpen, showUsernameModal } = this.state;
    const modalStyles = {
      width: "400px",
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "1rem",
    };
    return (
      <>
        <Layout>
          <Movies
            openEditModal={(item) => {
              this.setState({
                formData: {
                  ...item,
                  year: formatDate(item.year),
                },
                editModalOpen: true,
              });
            }}
            setIsFavorites={setIsFavorites}
            isFavorites={isFavorites}
            data={isFavorites ? favorites : movies}
          />
        </Layout>
        {editModalOpen && (
          <Modal
            title={`Edit movie`}
            style={modalStyles}
            handleClose={() => {
              this.setState({
                editModalOpen: false,
                formData: {},
              });
            }}
            buttonText="Save"
            formId={"edit-form"}
            isForm
          >
            <AddEditMovieForm
              isEdit
              id="edit-form"
              values={formData}
              onSubmit={(data) => this.onSubmit(data)}
            />
          </Modal>
        )}
      </>
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
