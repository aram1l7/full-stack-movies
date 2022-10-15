import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  margin-top: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const MovieCard = styled(Link)`
  padding: 1rem 0.5rem;
  background-color: gray;
  font-size: 1.4rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  color: white;
`;

function Movies({ data }) {
  return (
    <div>
      <Heading>Movies</Heading>
      <Grid>
        {data?.map((item) => {
          return (
            <MovieCard to={`/movies/${item.id}`} key={item.id}>
              <p>{item.title}</p>
              <span>{item.year}</span>
              <p>{item.runtime}</p>
            </MovieCard>
          );
        })}
      </Grid>
    </div>
  );
}

export default Movies;
