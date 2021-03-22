import React, { useState } from "react";

import styled from "styled-components";
import { H3, H1 } from "../layout/TextStyles";
import MainButton from "../components/buttons/MainButton";
import SecondaryButton from "../components/buttons/SecondaryButton";

import Results from "../components/Results/Results";
import Testimonials from "../components/testimonials/Testimonials";

// Icons

import Quiz from "../components/Quiz/Quiz";
import Hero from "../components/homepage/Hero";
import Achievements from "../components/homepage/achievements/Achievements";
import HomeJumbos from "../components/jumbotron/HomeJumbos";
import MobileHomeJumbos from "../components/jumbotron/MobileHomeJumbos";
import Courses from "../components/Courses/Courses";
import JumboCall from "../components/jumbotron/JumboCall";
import { ButtonsWrapper } from "../layout/ButtonsWrapper";

const Home = () => {
  const [isTest, setIsTest] = useState(false);

  const handleQuiz = () => {
    setIsTest(!isTest);
  };

  const closeQuiz = () => {
    setIsTest(false);
  };
  return (
    <Wrapper>
      <Hero
        action={handleQuiz}
        // mainAction={}
      />
      <Achievements />

      <JumboCall first={true} />

      <Space>
        <H1>Наши курсы</H1>
      </Space>
      <Courses />
      <Space />
      <Results />
      <Space />
      <ButtonsWrapper>
        <MainButton />
        <SecondaryButton action={handleQuiz} />
      </ButtonsWrapper>
      <Space />
      <Testimonials />
      <Quiz isTest={isTest} handleQuiz={closeQuiz} />
      <Space />
      <MobileHomeJumbos />
      {/* <BigSpace> */}
      <DeskHide>
        <ButtonsWrapper>
          <MainButton />
          <SecondaryButton action={handleQuiz} setIsTest={setIsTest} />
        </ButtonsWrapper>
      </DeskHide>
      {/* </BigSpace> */}
      {/* <Addresses /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* margin: 0 20px; */
  max-width: 1234px;
  margin: auto;
  @media screen and (max-width: 768px) {
    magin: 0 0;
  }
`;
const Space = styled.div`
  margin-bottom: 64px;
`;
const BigSpace = styled.div`
  margin: 120px 0;
`;

// const JumboCall = styled.div`
//   display: grid;
//   grid-template-columns: auto auto;
//   align-items: center;

//   @media screen and (max-width: 450px) {
//     grid-template-columns: auto;
//   }
// `;

const DeskHide = styled.div`
  @media screen and (min-width: 450px) {
    display: none;
  }
`;
