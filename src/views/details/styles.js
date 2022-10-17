import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;
  max-width: 1000px;
  margin: 0px auto;
`;

export const ImgWrapper = styled.div`
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

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex-basis: 50%;
  @media only screen and (max-width: 870px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

export const MovieTitle = styled.h1`
  font-size: 3rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  & > span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Plot = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TopWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media only screen and (max-width: 870px) {
    flex-direction: column;
    align-items: center;
  }
`;
