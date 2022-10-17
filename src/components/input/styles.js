import styled from "styled-components";

export const StyledInput = styled.input`
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 4px;
`;
