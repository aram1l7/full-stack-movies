import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #404040;
  color: #fff;
`;

export const StyledTitle = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AddButton = styled.div`
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

export const Plus = styled.span`
  font-size: 16px;
  font-weight: 800;
`;
