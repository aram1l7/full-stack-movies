import { createMovie } from "api";
import Modal from "components/modal";
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFavorites } from "state/modules/movies/actions";
import { favoriteSelector } from "state/modules/movies/selectors";
import AddMovieForm from "views/add-movie";
import UsernameForm from "views/username-form";
import toast, { Toaster } from "react-hot-toast";
import { addMovieSuccess } from "state/modules/movies/actions";

import {
  AddButton,
  BtnContainer,
  Plus,
  StyledHeader,
  StyledTitle,
} from "./styles";

class Header extends Component {
  state = {
    addMovieModalOpen: false,
    showUsernameModal: false,
    formValues: {},
  };
  onSubmit = async (data, bool) => {
    if (!bool) {
      this.setState({
        formValues: data,
        addMovieModalOpen: false,
        showUsernameModal: true,
      });
      return;
    }
    const { formValues } = this.state;
    let finalData = {
      ...formValues,
      ...data,
      genre: `{${formValues.genre}}`,
    };
    this.setState({
      showUsernameModal: false,
    });

    try {
      const { addMovieCompleted } = this.props;
      const res = await createMovie(finalData);
      addMovieCompleted(res.data);
      toast.success("Movie was successfully created!");
    } catch (error) {
      if (error.response.data.detail.includes("already exists")) {
        toast.error(`Movie ${formValues.title} already exists`);
      }
    }
    this.setState({
      formValues: {},
    });
  };
  render() {
    const { addMovieModalOpen, showUsernameModal, formValues } = this.state;

    const modalStyles = {
      width: "400px",
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "1rem",
    };
    return (
      <>
        <Toaster />
        <StyledHeader>
          <StyledTitle to="/">iMovies</StyledTitle>
          <BtnContainer
            onClick={() => {
              this.setState({
                addMovieModalOpen: true,
              });
            }}
          >
            <AddButton>
              <Plus>+</Plus>
              Add new movie
            </AddButton>
          </BtnContainer>
        </StyledHeader>
        {addMovieModalOpen && (
          <Modal
            title={`Add new movie`}
            style={modalStyles}
            handleClose={() => {
              this.setState({
                addMovieModalOpen: false,
                formValues: {},
              });
            }}
            buttonText="Save"
            formId={"add-form"}
            isForm
          >
            <AddMovieForm
              id="add-form"
              values={formValues}
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
                addMovieModalOpen: true,
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addMovieCompleted: (data) => dispatch(addMovieSuccess(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
