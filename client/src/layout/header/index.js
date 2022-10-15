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

const StarButton = styled.div`
  background-color: yellow;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  display: inline-block;
  height: 20px;
  width: 20px;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  gap: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: yellow;
  }
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
    const { isFavorites, setIsFavorites } = this.props;
    return (
      <StyledHeader>
        <StyledTitle>iMovies</StyledTitle>
        <BtnContainer>
          <StarContainer
            className={isFavorites ? "active-favorites" : ""}
            onClick={() => setIsFavorites(!isFavorites)}
          >
            <StarButton />
            Favorites
          </StarContainer>
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
