import { Link } from "react-router-dom";
import styled from "styled-components";

export const Grid = styled.div`
  margin-top: 1.5rem;
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const MovieCard = styled.div`
  padding: 1rem 0.5rem;
  background-color: white;
  font-size: 1.4rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  & > span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const StarButton = styled.div`
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

export const StarContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  align-items: end;
  font-weight: 600;
  gap: 10px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBar = styled.input`
  outline: none;
  border: none;
  border-radius: 12px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const NotFound = styled.div`
  font-size: 14px;
  color: #ef3333;
  margin-top: 10px;
  font-weight: 500;
`;

export const MovieTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
