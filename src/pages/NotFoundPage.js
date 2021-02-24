import React from "react";
import styled from "styled-components";
import { H1 } from "../layout/TextStyles";

function NotFoundPage() {
  return (
    <Wrapper>
      <H1>Page not found</H1>
    </Wrapper>
  );
}

export default NotFoundPage;

const Wrapper = styled.div`
  margin: auto;
  padding-top: 250px;
  height: 85vh;
`;
