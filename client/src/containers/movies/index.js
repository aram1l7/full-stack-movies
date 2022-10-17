import { deleteMovieById } from "api";
import { toggleFavorite } from "api";
import { updateMovieById } from "api";
import Modal from "components/modal";
import Layout from "layout";
import React, { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import { connect } from "react-redux";
import { updateMovieSuccess } from "state/modules/movies/actions";
import { toggleFavoriteAction } from "state/modules/movies/actions";
import { deleteMovieSuccess } from "state/modules/movies/actions";
import { filterFavorites } from "state/modules/movies/actions";
import { fetchInitDataOperation } from "state/modules/movies/operations";
import { favoriteSelector } from "state/modules/movies/selectors";
import { favoriteDataSelector } from "state/modules/movies/selectors";
import { moviesSelector } from "state/modules/movies/selectors";
import { formatDate } from "utils/formatDate";
import AddEditMovieForm from "views/add-edit-movie";
import ConfirmModal from "views/confirm-modal";
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
    openDeleteModal: false,
    deleteAction: false,
    favorite: null,
    currentItem: {},
    toggleFavoriteAction: false,
  };
  onEdit = async (data, bool) => {
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
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };
  handleClose = () => {
    this.setState({
      editModalOpen: false,
      formData: {},
    });
  };
  closeDeleteModal = () => {
    this.setState({
      id: null,
      openDeleteModal: false,
    });
  };

  onDelete = async (username) => {
    const { id } = this.state;
    const { deleteMovie } = this.props;
    this.setState({
      id: null,
      showUsernameModal: false,
    });
    try {
      await deleteMovieById(id, username);
      toast.success(`Movie was successfully deleted`);
      deleteMovie(id);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  onToggleFavorite = async (username) => {
    const { id, favorite, currentItem } = this.state;
    try {
      await toggleFavorite(id, { username, favorite });
      const { toggleMovieFavorite } = this.props;
      toggleMovieFavorite({ id, favorite, currentItem });
      toast.success(
        `Movie was successfully ${
          favorite ? "added to" : "removed from"
        } favorites`
      );
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      }
    }
    this.setState({
      showUsernameModal: false,
      id: null,
      toggleFavoriteAction: false,
      currentItem: {},
    });
  };

  render() {
    const { movies, isFavorites, favorites, setIsFavorites } = this.props;
    const {
      formData,
      editModalOpen,
      showUsernameModal,
      openDeleteModal,
      deleteAction,
      toggleFavoriteAction,
    } = this.state;
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
            openDeleteModal={(id) => {
              this.setState({
                id,
                openDeleteModal: true,
              });
            }}
            openFavoriteModal={(item) => {
              this.setState({
                favorite: !item.is_favorite,
                id: item.id,
                currentItem: { ...item, is_favorite: !item.is_favorite },
                toggleFavoriteAction: true,
                showUsernameModal: true,
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
              onSubmit={(data) => this.onEdit(data)}
            />
          </Modal>
        )}
        {showUsernameModal && (
          <Modal
            style={modalStyles}
            handleClose={() => {
              this.setState({
                showUsernameModal: false,
                editModalOpen:
                  deleteAction || toggleFavoriteAction ? false : true,
              });
            }}
            buttonText="Submit"
            title="Enter username"
            formId={"enter-username"}
            isForm
          >
            <UsernameForm
              id="enter-username"
              onSubmit={(data) => {
                deleteAction
                  ? this.onDelete(data.username)
                  : toggleFavoriteAction
                  ? this.onToggleFavorite(data.username)
                  : this.onEdit(data, true);
              }}
            />
          </Modal>
        )}
        {openDeleteModal && (
          <Modal
            title={`Delete movie`}
            style={modalStyles}
            handleClose={this.closeDeleteModal}
            withoutFooter
          >
            <ConfirmModal
              onCancel={this.closeDeleteModal}
              onConfirm={() => {
                this.setState({
                  deleteAction: true,
                  showUsernameModal: true,
                  openDeleteModal: false,
                });
              }}
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
  deleteMovie: (id) => dispatch(deleteMovieSuccess(id)),
  toggleMovieFavorite: (data) => dispatch(toggleFavoriteAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
