import React from "react";

import styled from "styled-components";

function Slide({ image, action }) {
  return (
    <Wrapper>
      <Img src={image} onClick={action} />
    </Wrapper>
  );
}

export default Slide;

const Wrapper = styled.div`
  padding: 0 16px;
`;

const Img = styled.img`
  margin: auto;
  border-radius: 16px;
  width: 100%;
`;
