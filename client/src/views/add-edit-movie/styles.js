import styled from "styled-components";

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;

  & > button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    background: #0874ff;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &.cancel {
      background-color: #e92b2b;
    }
  }
`;
