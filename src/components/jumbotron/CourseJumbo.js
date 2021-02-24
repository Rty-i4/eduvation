import React from "react";
import styled from "styled-components";
import { H3 } from "../../layout/TextStyles";

// Icons

function CourseJumbo({ mainText, subText, image }) {
  return (
    <Wrapper>
      <H3>{mainText}</H3>
      <Hr />
      <Icon src={image} />
      <Text>{subText}</Text>
    </Wrapper>
  );
}

export default CourseJumbo;

const Wrapper = styled.div`
  display: grid;

  grid-gap: 16px;
  margin: 60px 20px 60px;
`;

const Icon = styled.img`
  margin: 32px auto;
`;

const Hr = styled.div`
  height: 4px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  width: 225px;
  border-radius: 8px;
  margin: 0px auto;
`;

const Text = styled.p`
  font-weight: 500;
  color: #e0e0e0;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  line-height: 25px;
`;
