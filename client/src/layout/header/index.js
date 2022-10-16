import Modal from "components/modal";
import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFavorites } from "state/modules/movies/actions";
import { favoriteSelector } from "state/modules/movies/selectors";
import AddMovieForm from "views/add-movie";
import UsernameForm from "views/username-form";
import {
  AddButton,
  BtnContainer,
  Plus,
  StyledHeader,
  StyledTitle,
} from "./styles";

class Header extends Component {
  state = {
    addMovieModalOpen: true,
    showUsernameModal: false,
    formValues: {},
  };
  onSubmit = (data, bool) => {
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
    console.log(finalData, "final");
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

const mapStateToProps = (state) => ({
  isFavorites: favoriteSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  setIsFavorites: (bool) => dispatch(filterFavorites(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
