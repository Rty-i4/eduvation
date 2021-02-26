import React, { useState } from "react";

import styled from "styled-components";
import { H3, H1 } from "../layout/TextStyles";
import MainButton from "../components/buttons/MainButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Callback from "../components/callback/Callback";
import CourseCard from "../components/Courses/CourseCard";

import Results from "../components/Results/Results";
import Testimonials from "../components/testimonials/Testimonials";
import Jumbotron from "../components/jumbotron/Jumbotron";

// Icons
import Tick from "../images/Iconly/Bulk/tick.svg";
import Chart from "../images/Iconly/Bulk/Chart.svg";
import Document from "../images/Iconly/Bulk/Document.svg";
import Users from "../images/Iconly/Bulk/users.svg";
import Quiz from "../components/Quiz/Quiz";
import Hero from "../components/homepage/Hero";
import Achievements from "../components/homepage/achievements/Achievements";
import HomeJumbos from "../components/jumbotron/HomeJumbos";
import MobileHomeJumbos from "../components/jumbotron/MobileHomeJumbos";
import Courses from "../components/Courses/Courses";

const Home = () => {
  const [isTest, setIsTest] = useState(false);

  const handleQuiz = () => {
    setIsTest(!isTest);
  };
  return (
    <Wrapper>
      <Hero action={handleQuiz} />
      <Achievements />
      <JumboCall>
        <HomeJumbos />
        <Callback />
      </JumboCall>
      <Space>
        <H1>Наши курсы</H1>
      </Space>
      <Courses />
      <Space />
      <Results />
      <Space />
      <MainButton />
      <SecondaryButton />
      <Space />
      <Testimonials />
      <Quiz isTest={isTest} handleQuiz={handleQuiz} />
      <Space />
      <MobileHomeJumbos />
      <BigSpace>
        <MainButton />
        <SecondaryButton />
      </BigSpace>
      {/* <Addresses /> */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* margin: 0 20px; */
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

const JumboCall = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

  @media screen and (max-width: 450px) {
    grid-template-columns: auto;
  }
`;
