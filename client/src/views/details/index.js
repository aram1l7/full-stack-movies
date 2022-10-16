import React from "react";
import styled from "styled-components";
import movieImg from "assets/images/movie.jpg";

const StyledContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0px auto;
`;

const ImgWrapper = styled.div`
  flex-basis: 50%;
  @media only screen and (max-width: 870px) {
    flex-basis: 100%;
    width: 100%;
  }
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex-basis: 50%;
  @media only screen and (max-width: 870px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const MovieTitle = styled.h1`
  font-size: 3rem;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  & > span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const Plot = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 870px) {
    flex-direction: column;
    align-items: center;
  }
`;

function Movie({ details }) {
  return (
    <>
      <StyledContainer>
        <TopWrapper>
          <ImgWrapper>
            <img src={details.poster_src || movieImg} alt={details.title} />
          </ImgWrapper>
          <DetailsContainer>
            <MovieTitle>{details.title}</MovieTitle>
            {details.awards && (
              <DescriptionWrapper>
                <span>Awards:</span>
                <span>{details.awards}</span>
              </DescriptionWrapper>
            )}
            {details.country && (
              <DescriptionWrapper>
                <span>Country:</span>
                <span>{details.country}</span>
              </DescriptionWrapper>
            )}
            {details.imdb_rating && (
              <DescriptionWrapper>
                <span>Imdb rating:</span>
                <span>{details.imdb_rating}</span>
              </DescriptionWrapper>
            )}

            <DescriptionWrapper>
              <span>Director:</span>
              <span>{details.director}</span>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <span>Year:</span>
              <span>{details.year}</span>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <span>Runtime:</span>
              <span>{details.runtime}</span>
            </DescriptionWrapper>
            <DescriptionWrapper>
              <span>Genre:</span>
              <span>{details.genre?.map((el) => el).join(", ")}</span>
            </DescriptionWrapper>
          </DetailsContainer>
        </TopWrapper>
        {details.plot && (
          <Plot>
            <h1>Movie details</h1>
            <article>{details.plot}</article>
          </Plot>
        )}
      </StyledContainer>
    </>
  );
}

export default Movie;
