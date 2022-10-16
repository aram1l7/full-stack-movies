import { updateMovieById } from "api";
import Modal from "components/modal";
import Layout from "layout";
import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import { updateMovieSuccess } from "state/modules/movies/actions";
import { filterFavorites } from "state/modules/movies/actions";
import { fetchInitDataOperation } from "state/modules/movies/operations";
import { favoriteSelector } from "state/modules/movies/selectors";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import { moviesSelector } from "state/modules/movies/selectors";
import { formatDate } from "utils/formatDate";
import AddEditMovieForm from "views/add-edit-movie";
import Movies from "views/movies";
import UsernameForm from "views/username-form";

class MoviesContainer extends Component {
  componentDidMount() {
    const { fetchInitialData } = this.props;
    fetchInitialData();
  }
  state = {
    editModalOpen: false,
    formData: {},
    changedValues: {},
    showUsernameModal: false,
    id: null,
  };
  onSubmit = async (data, bool) => {
    console.log(data, "data");
    if (!bool) {
      this.setState({
        changedValues: data,
        editModalOpen: false,
        showUsernameModal: true,
      });
      return;
    }
    const { changedValues, id } = this.state;
    let finalData = {
      ...changedValues,
      ...data,
      genre: `{${changedValues.genre}}`,
    };
    console.log(finalData, "final");
    this.setState({
      showUsernameModal: false,
    });
    const { updateMovie } = this.props;
    try {
      await updateMovieById(id, finalData);
      console.log(changedValues, "chnged");
      toast.success(`Movie ${changedValues.title} was successfully updated`);
      updateMovie({
        ...changedValues,
        id,
        genre:
          typeof changedValues.genre === "string"
            ? changedValues.genre.split(", ")
            : changedValues.genre,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  handleClose = () => {
    this.setState({
      editModalOpen: false,
      formData: {},
    });
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
        <Toaster />
        <Layout>
          <Movies
            openEditModal={(item) => {
              const { title, year, genre, runtime, director, id } = item;
              let data = { title, year, genre, runtime, director };
              this.setState({
                formData: {
                  ...data,
                  year: formatDate(year),
                },
                editModalOpen: true,
                id,
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
            handleClose={this.handleClose}
            withoutFooter
          >
            <AddEditMovieForm
              isEdit
              id="edit-form"
              onClose={this.handleClose}
              values={formData}
              onSubmit={(data) => this.onSubmit(data)}
            />
          </Modal>
        )}
        {showUsernameModal && (
          <Modal
            style={modalStyles}
            handleClose={() => {
              this.setState({
                showUsernameModal: false,
                editModalOpen: true,
              });
            }}
            buttonText="Save"
            title="Enter username"
            formId={"enter-username"}
            isForm
          >
            <UsernameForm
              id="enter-username"
              onSubmit={(data) => this.onSubmit(data, true)}
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
  updateMovie: (data) => dispatch(updateMovieSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
