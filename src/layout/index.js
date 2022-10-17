import React from "react";
import Header from "./header";
import styled from "styled-components";
const Main = styled.main`
  padding: 1rem 2rem;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
