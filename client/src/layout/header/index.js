import React, { Component } from "react";
import { connect } from "react-redux";
import { filterFavorites } from "state/modules/movies/actions";
import { favoriteSelector } from "state/modules/movies/selectors";
import {
  AddButton,
  BtnContainer,
  Plus,
  StyledHeader,
  StyledTitle,
} from "./styled";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledTitle to="/">iMovies</StyledTitle>
        <BtnContainer>
          <AddButton>
            <Plus>+</Plus>
            Add new movie
          </AddButton>
        </BtnContainer>
      </StyledHeader>
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
