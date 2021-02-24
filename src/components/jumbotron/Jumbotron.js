import React from "react";
import styled from "styled-components";

function Jumbotron({ icon, mainText, subText }) {
  return (
    <Wrapper>
      <Icon src={icon} />
      <MainText>{mainText}</MainText>
      <Hr />
      <Text>{subText}</Text>
    </Wrapper>
  );
}

export default Jumbotron;

const Wrapper = styled.div`
  display: grid;

  grid-gap: 16px;
  margin: 64px 20px 0 20px;
`;

const Icon = styled.img``;

const MainText = styled.h2`
  color: #fff;
  font-weight: 600;
  font-size: 30px;
`;

const Hr = styled.div`
  height: 4px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  width: 225px;
  border-radius: 8px;
`;

const Text = styled.p`
  font-weight: 500;
  color: #e0e0e0;
  font-size: 16px;
  line-height: 130%;
`;
