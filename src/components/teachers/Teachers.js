import React from "react";
import styled from "styled-components";
import { BodyMain, MediumTextDiv } from "../../layout/TextStyles";

// Icons

function Teachers({ name, description, image }) {
  return (
    <Wrapper>
      <Img src={image} />
      <BodyMain>{name}</BodyMain>
      <Description>
        <MediumTextDiv>
          {description}
          <br />
        </MediumTextDiv>
      </Description>
    </Wrapper>
  );
}

export default Teachers;

const Wrapper = styled.div`
  margin: 40px auto;
  text-align: center;
`;

const Img = styled.img`
  margin: 16px auto;
`;

const Description = styled.div`
  text-align: center;
  margin: 16px;
`;
