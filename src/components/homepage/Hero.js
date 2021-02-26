import React from "react";
import styled from "styled-components";

import goknam from "../../images/goknam.png";
import { HeroTitle } from "../../layout/TextStyles";
import MainButton from "../buttons/MainButton";
import SecondaryButton from "../buttons/SecondaryButton";

function Hero({ action }) {
  return (
    <Wrapper>
      <Img src={goknam} />
      <Section>
        <HeroTitle>
          Курсы по поготовке к <br />
          международным экзаменам <br />
          IELTS, SAT, NUFYPET
        </HeroTitle>
        <Buttons>
          <MainButton />
          <SecondaryButton action={action} />
        </Buttons>
      </Section>
    </Wrapper>
  );
}

export default Hero;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "text image";
  align-items: center;
  margin: 0 20px;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 450px) {
    grid-template-areas:
      "image"
      "text";

    justify-content: center;
  }
`;

const Img = styled.img`
  width: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  grid-area: image;

  @media screen and (max-width: 768px) {
    width: 350px;
  }

  @media screen and (max-width: 450px) {
    width: 308px;
  }
`;

const Buttons = styled.div``;

const Section = styled.div`
  grid-area: text;
  margin-left: 20px;
  justify-self: start;
  display: grid;
  grid-gap: 50px;
  @media screen and (max-width: 768px) {
    grid-gap: 0;
    margin-left: 0px;
  }
`;
