import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import movieImg from "assets/images/movie.jpg";

const Grid = styled.div`
  margin-top: 1.5rem;
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const MovieCard = styled(Link)`
  padding: 1rem 0.5rem;
  background-color: white;
  font-size: 1.4rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  color: black;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  & > span {
    font-size: 14px;
    font-weight: 500;
  }
`;

const StarButton = styled.div`
  background-color: #3f4df1;
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
  background-color: white;
  border-radius: 8px;
  align-items: center;
  font-weight: 600;
  gap: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Movies({ data, isFavorites, setIsFavorites }) {
  return (
    <div>
      <BtnWrapper>
        <Heading>{isFavorites ? "Favorites" : "Movies"}</Heading>
        <StarContainer
          className={isFavorites ? "active-favorites" : ""}
          onClick={() => setIsFavorites(!isFavorites)}
        >
          <StarButton />
          Favorites
        </StarContainer>
      </BtnWrapper>
      <Grid>
        {data?.map((item) => {
          return (
            <MovieCard to={`/movies/${item.id}`} key={item.id}>
              <ImgWrapper>
                <img src={item.poster_src || movieImg} alt={item.title} />
              </ImgWrapper>
              <MovieTitle>{item.title}</MovieTitle>
              <DescriptionWrapper>
                <span>Release date:</span>
                <span>{item.year}</span>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <span>Runtime:</span>
                <span>{item.runtime}</span>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <span>Genre:</span>
                <span>{item.genre.map((el) => el).join(", ")}</span>
              </DescriptionWrapper>
              <DescriptionWrapper>
                <span>Director:</span>
                <span>{item.director}</span>
              </DescriptionWrapper>
            </MovieCard>
          );
        })}
      </Grid>
    </div>
  );
}

export default Movies;
