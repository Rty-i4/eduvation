import React from "react";
import styled from "styled-components";
import Callback from "../callback/Callback";
import HomeJumbos from "./HomeJumbos";

function JumboCall({ first }) {
  return (
    <Wrapper>
      <HomeJumbos first={first} />
      <Callback />
    </Wrapper>
  );
}

export default JumboCall;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  grid-gap: 150px;
  margin: 120px 0;
  @media screen and (max-width: 768px) {
    grid-gap: 0px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: auto;
  }
`;
