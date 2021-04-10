import React from "react";
import styled from "styled-components";
import { H1, H3 } from "../../layout/TextStyles";

// Images
import Cambridge from "../../images/cambridge.jpg";
import MainButton from "../buttons/MainButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { ButtonsWrapper } from "../../layout/ButtonsWrapper";

function PageHero({ title, description, image, text, action }) {
  return (
    <Wrapper>
      <HeroSection>
        <HeroImage image={image}>
          <HeroText>
            <H1>{title}</H1>
            <Hr />
            <H3>{description}</H3>
            {/* <ButtonsWrapper> */}
            <Buttons>
              <MainButton mainAction={action} />
              <SecondaryButton text={text} />
            </Buttons>
            {/* </ButtonsWrapper> */}
          </HeroText>
        </HeroImage>
      </HeroSection>
    </Wrapper>
  );
}

export default PageHero;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  /* height: 500px; */
  height: 80vh;
  max-height: 700px;

  @media screen and (min-width: 450px) {
    height: 600px;
  }
`;

const HeroSection = styled.div`
  /* position: relative; */
`;

const HeroText = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  color: white;
  margin: auto;
  padding: 0 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroImage = styled.div`
  height: 700px;
  background: url(${({ image }) => image});
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  object-fit: cover; */
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 450px) {
    height: 700px;
  }
`;

const Hr = styled.div`
  height: 4px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  width: 225px;
  border-radius: 8px;
  margin: 32px auto;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  grid-gap: 0px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    grid-gap: 0px;
    /* margin-top: 100px; */
  }
`;
