import React from "react";
import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-gap: 80px;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-gap: 0px;
  }
`;
