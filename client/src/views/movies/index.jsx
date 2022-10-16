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
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
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

function Movies({ data, isFavorites }) {
  return (
    <div>
      <Heading>{isFavorites ? "Favorites" : "Movies"}</Heading>
      <Grid>
        {data?.map((item) => {
          return (
            <MovieCard to={`/movies/${item.id}`} key={item.id}>
              <ImgWrapper>
                <Img src={item.poster_src || movieImg} alt={item.title} />
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
