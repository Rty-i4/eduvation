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

import { callbackQuestions } from "../Data/CallbackQuestions";
import Quiz2 from "../components/Quiz/Quiz2";

const Home = () => {
  const [isTest, setIsTest] = useState(false);

  const handleQuiz = () => {
    setIsTest(!isTest);
  };

  const closeQuiz = () => {
    setIsTest(false);
  };

  // Survey
  const [isSurvey, setIsSurvey] = useState(false);

  const handleSurvey = () => {
    setIsSurvey(!isSurvey);
  };

  const closeSurvey = () => {
    setIsSurvey(false);
  };

  return (
    <Wrapper>
      <Hero action={handleQuiz} mainAction={handleSurvey} />
      <Quiz2
        isTest={isSurvey}
        handleQuiz={closeSurvey}
        questions={callbackQuestions}
        downloadLink="https://drive.google.com/file/d/1N2AoAlNsdRc-oqs2AmM5_pRRH0J7Jl-1/view"
        // "https://drive.google.com/file/d/1N2AoAlNsdRc-oqs2AmM5_pRRH0J7Jl-1/view"
        // link for sample tests
        // https://drive.google.com/drive/folders/1t4TB8Q75JS6219iql6t2Iimq6yikJQDq?usp=sharing

        // SAT
        // https://drive.google.com/file/d/1GJDjhx9NY4pX5CedW9B5JwbiZeipbSh4/view?usp=sharing
      />
      <Notice>
        <NoticeTitle>Внимание</NoticeTitle>
        <p>Онлайн платформа теперь на</p>
        <NoticeLink href="https://eduvation.kz" target="_blank">
          eduvation.online
        </NoticeLink>
      </Notice>
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
        <MainButton mainAction={handleSurvey} />
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

const Notice = styled.div`
  color: white;
  margin: 60px 20px 0;
  padding: 16px;
  background: #1e2127;
  border-radius: 8px;
  display: grid;
  grid-gap: 10px;
`;

const NoticeTitle = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  background: linear-gradient(
    90deg,
    #7ccb2b -0.35%,
    #7ccb2b 40.14%,
    #65c432 157.33%,
    #31ae42 234.03%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NoticeLink = styled.a`
  color: #4689ff;
`;
