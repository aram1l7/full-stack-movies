import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999999;
  overflow: hidden;
  padding: 0.5rem 1rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > span {
    cursor: pointer;
  }
  & > h3 {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.0015em;
  }
`;

export const CloseBtn = styled.div`
  width: 25px;
  height: 18px;

  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 18px;
    width: 2px;
    background-color: black;
  }
  &::before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 1rem;
  width: 100%;

  & > button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    background: #0874ff;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
  }
`;
