import React from "react";
import styled from "styled-components";

import goknam from "../../images/goknam.png";
import vlad from "../../images/vladislav.png";
import { HeroTitle } from "../../layout/TextStyles";
import MainButton from "../buttons/MainButton";
import SecondaryButton from "../buttons/SecondaryButton";

import { Link } from "react-scroll";

function Hero({ action, mainAction }) {
  return (
    <BG>
      <Wrapper>
        <Section>
          <HeroTitle>
            Курсы по подготовке к <br />
            IELTS, SAT, NUFYPET, <br />
            English
          </HeroTitle>
          <HeroP>
            Сеть образовательных центров в городах Алматы, Нур-Султан, Актобе,
            Атырау
          </HeroP>
          <Buttons>
            {/* <Link
            activeClass="active"
            to="heroCall"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          > */}
            <MainButton mainAction={mainAction} />
            {/* </Link> */}
            <SecondaryButton action={action} />
          </Buttons>
        </Section>
        <ImgContainer>
          <Img src={vlad} />
        </ImgContainer>
      </Wrapper>
    </BG>
  );
}

export default Hero;

const BG = styled.div`
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 16px;
  margin: 0 20px;
  @media screen and (max-width: 768px) {
    border-radius: 0px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  overflow: hidden;
  /* overlay: none; */
  /* height: 300px; */
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas: "text image";
  align-items: center;
  margin: 30px 20px;
  /* border-radius: 16px;
  @media screen and (max-width: 768px) {
    border-radius: 0px;
  } */

  @media screen and (max-width: 450px) {
    margin: 0 0px;
    /* display: flex; */
    /* flex-direction: column; */
    grid-template-columns: auto;
    grid-template-areas:
      "text"
      "image";

    /* justify-self: center; */
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
  grid-area: text;
  /* justify-self: start; */
  display: grid;
  grid-gap: 50px;
  grid-gap: 0;
  @media screen and (max-width: 768px) {
    grid-gap: 0;
    margin-left: 20px;
  }
`;
// div for loading fast
const ImgContainer = styled.div`
  height: 598px;
  @media screen and (max-width: 768px) {
    height: 400px;
    /* overflow: hidden; */
  }

  @media screen and (max-width: 450px) {
    /* height: 368px; */
    height: 250px;
  }
`;

const HeroP = styled.p`
  color: #f2f2f2;
  margin-top: 16px;
  font-weight: 500;
  font-size: 16px;
  width: 286px;
  line-height: 130%;
`;
