import React from "react";
import styled from "styled-components";
import Achievement from "./Achievement";

function Achievements() {
  return (
    <Wrapper>
      <Achievement />
    </Wrapper>
  );
}

export default Achievements;

const Wrapper = styled.div`
  margin: 60px 20px;
  /* width: 1170px; */
  background: #1e2127;
  /* height: 177px; */
  border-radius: 20px;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
