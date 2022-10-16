import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { filterFavorites } from "state/modules/movies/actions";
import { favoriteSelector } from "state/modules/movies/selectors";

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #404040;
  color: #fff;
`;

const StyledTitle = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
`;



const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AddButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  background: #646464;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  &:hover {
    background: none;
    color: yellow;
  }
`;

const Plus = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

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
