import React from "react";
import movieImg from "assets/images/movie.jpg";
import { capitalizeWord } from "utils/capitalizeWord";
import { removeNonAlphaNumeric } from "utils/removeNonAlphaNumeric";
import {
  DescriptionWrapper,
  DetailsContainer,
  ImgWrapper,
  MovieTitle,
  Plot,
  StyledContainer,
  TopWrapper,
} from "./styles";

function Movie({ details, isSuccess }) {
  return (
    <>
      {isSuccess && (
        <StyledContainer>
          <TopWrapper>
            <ImgWrapper>
              <img src={details.poster_src || movieImg} alt={details.title} />
            </ImgWrapper>
            <DetailsContainer>
              <MovieTitle>
                {capitalizeWord(removeNonAlphaNumeric(details.title))}
              </MovieTitle>
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
      )}
    </>
  );
}

export default Movie;
