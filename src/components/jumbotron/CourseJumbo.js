import React from "react";
import styled from "styled-components";

// Icons

function CourseJumbo({ mainText, subText, image, reverse }) {
  return (
    <Wrapper reverse={reverse}>
      <SectionOne>
        <Title>{mainText}</Title>
        <Hr />
        <Icon src={image} />
        <Text>{subText}</Text>
      </SectionOne>
      <ImgDesktop src={image} />
    </Wrapper>
  );
}

export default CourseJumbo;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-areas: "${(props) =>
    props.reverse ? "content image" : "image content"}";
  margin: 100px 100px 60px;
  @media screen and (max-width: 768px) {
    margin: 100px 20px 60px;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: auto;
    justify-self: center;
    margin: 60px 20px 100px;
  }
`;

const SectionOne = styled.div`
  display: grid;
  grid-gap: 16px;
  justify-content: center;
  align-content: center;
  grid-area: content;

  @media screen and (max-width: 450px) {
    grid-gap: 16px;
  }
`;

const Icon = styled.img`
  margin: 32px auto;

  @media screen and (min-width: 450px) {
    display: none;
  }
`;

const ImgDesktop = styled.img`
  margin: 32px auto;
  width: 350px;
  grid-area: image;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Hr = styled.div`
  height: 4px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  width: 320px;
  border-radius: 8px;
  @media screen and (max-width: 450px) {
    margin: 0px auto;
    width: 225px;
  }
`;

const Text = styled.div`
  font-weight: 500;
  color: #e0e0e0;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  line-height: 25px;
  max-width: 450px;

  @media screen and (min-width: 450px) {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }
`;

export const Title = styled.h3`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 38px;
  text-align: left;
  line-height: 130%;
  color: #fff;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 450px) {
    font-size: 24px;
    text-align: center;
  }
`;
