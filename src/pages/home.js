import React from "react";

import styled from "styled-components";
import { H3, H1 } from "../layout/TextStyles";
import goknam from "../images/goknam.png";
import MainButton from "../components/buttons/MainButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import Callback from "../components/callback/Callback";
import CourseCard from "../components/Courses/CourseCard";

import NU from "../images/nu.jpg";
import Library from "../images/library.jpg";
import Cambridge from "../images/cambridge.jpg";
import London from "../images/london.jpg";
import Results from "../components/Results/Results";
import Testimonials from "../components/testimonials/Testimonials";
import Jumbotron from "../components/jumbotron/Jumbotron";

// Icons
import Tick from "../images/Iconly/Bulk/tick.svg";
import Chart from "../images/Iconly/Bulk/Chart.svg";
import Document from "../images/Iconly/Bulk/Document.svg";
import Users from "../images/Iconly/Bulk/users.svg";
import Quiz2 from "../components/Quiz/Quiz2";
import Slider from "react-slick";
import QuizWelcomPage from "../components/Quiz/QuizWelcomPage";

const Home = () => {
  return (
    <div>
      <Img src={goknam} />
      <H3>
        Курсы по поготовке к <br />
        международным экзаменам <br />
        IELTS, SAT, NUFYPET
      </H3>
      <MainButton />
      <SecondaryButton />
      <Callback />
      <Space>
        <H1>Наши курсы</H1>
      </Space>
      <CourseCard
        img={NU}
        title="NUFYPET"
        subtitle="Critical Thinking & Math"
        page="/nufypet"
      />
      <CourseCard
        img={Cambridge}
        title="IELTS"
        subtitle="Academic and General"
        page="/ielts"
      />
      <CourseCard img={Library} title="SAT" subtitle="Reasoning" page="/sat" />
      <CourseCard
        img={London}
        title="ENGLISH"
        subtitle="General and Pre-IELTS"
        page="/english"
      />
      <Space />
      <Results />
      <Space />
      <MainButton />
      <SecondaryButton />
      <Space />
      <Testimonials />
      <Quiz2 />
      <Space />
      <Jumbotron
        icon={Tick}
        mainText={
          <div>
            Нацеленность на <br />
            результат
          </div>
        }
        subText="48% учеников набирают желаемый балл с первой попытки."
      />
      <Jumbotron
        icon={Document}
        mainText={
          <div>
            Проверенные <br />
            материалы
          </div>
        }
        subText="Материалы для подготовки собраны 
          из проверенных источников"
      />
      <Jumbotron
        icon={Chart}
        mainText={
          <div>
            Отслеживание <br />
            прогресса
          </div>
        }
        subText="Регулярная сдача пробных тестов 
          помогает регулярно прогрессировать."
      />
      <Jumbotron
        icon={Users}
        mainText={
          <div>
            Опытные <br />
            преподаватели
          </div>
        }
        subText="Опыт преподавателей которые подготовят вас к тому что на самом деле нужно"
      />
      <BigSpace>
        <MainButton />
        <SecondaryButton />
      </BigSpace>
      {/* <Addresses /> */}
    </div>
  );
};

export default Home;

const Img = styled.img`
  width: 308px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Space = styled.div`
  margin-bottom: 64px;
`;
const BigSpace = styled.div`
  margin: 120px 0;
`;
