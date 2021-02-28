import React from "react";
import styled from "styled-components";
import { H1 } from "../layout/TextStyles";

// Images
import Cambridge from "../images/cambridge.jpg";
import ielts7 from "../images/ielts7.svg";
import learning from "../images/Iconly/Bulk/learning.svg";
import Crit from "../images/Iconly/Bulk/Crit.svg";

import MainButton from "../components/buttons/MainButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import PageHero from "../components/PageHero/PageHero";
import CourseJumbo from "../components/jumbotron/CourseJumbo";
import Testimonials from "../components/testimonials/Testimonials";
import { ButtonsWrapper } from "../layout/ButtonsWrapper";

function IeltsPage() {
  return (
    <Wrapper>
      <PageHero
        title="IELTS"
        description={
          <div>
            Сдайте IELTS на 7.0+ <br />
            по нашей уникальной программе
          </div>
        }
        image={Cambridge}
        text="Получить 500+ слов для IELTS"
      />
      <Content>
        <CourseJumbo
          reverse={true}
          mainText={
            <div>
              IELTS 7.0+
              <br />
              за 2.5 месяца
            </div>
          }
          subText={
            <div>
              <p>
                Подготовим вас по всем четырем секциям с отслеживанием вашего
                прогресса через проводимые каждые две недели пробные тесты
                (mock).
              </p>

              <p>
                <br />
              </p>
            </div>
          }
          image={ielts7}
        />
        <CourseJumbo
          reverse={false}
          mainText={
            <div>
              Ключевые навыки для
              <br />
              успешного балла
            </div>
          }
          subText={
            <div>
              <div>
                <p style={{ fontWeight: 600, fontSize: "18px", color: "#fff" }}>
                  После обучения вы
                </p>
                <ul style={{ textAlign: "left" }}>
                  <br />
                  <li>• проработаете все "подводные камни"</li>
                  <li>• научитесь следовать таймингам </li>
                  <li>• узнаете по какой логике построен тест</li>
                  <li>• разберёте виды вопросов и стратегии </li>
                  <li>• научитесь писать академиские эссе </li>
                  <li>• узнаеете как выжать максимальный балл</li>
                </ul>
              </div>

              <p>
                <br />
              </p>
            </div>
          }
          image={learning}
        />
        <ButtonsWrapper>
          <MainButton />
          <SecondaryButton text="Получить 500+ слов для IELTS" />
        </ButtonsWrapper>
        <Testimonials />
        <CourseJumbo
          reverse={true}
          mainText={
            <div>
              Что такое IELTS?
              <br />
            </div>
          }
          subText={
            <div style={{ textAlign: "left" }}>
              <p>
                Academic IELTS - международный тест на определение ваших знаний
                английкого языка по четырем секциям (writing, listening,
                speaking, reading).{" "}
              </p>

              <p>
                <br />
                При поступлении на учебу в заграничные ВУЗы или ВУЗы с
                английским обучением, сертификат IELTS подтверждает Вашу
                способность обучаться в учебном заведении на английском языке.
              </p>
              {/* <p>
                <br />
                IELTS это авторитетный тест, который принимают практически во
                всех странах мира и во всех учебных заведениях.
              </p> */}
            </div>
          }
          image={Crit}
        />
        <ButtonsWrapper>
          <MainButton />
          <SecondaryButton text="Получить 500+ слов для IELTS" />
        </ButtonsWrapper>
      </Content>
    </Wrapper>
  );
}

export default IeltsPage;

const Wrapper = styled.div``;

const HeroSection = styled.div`
  position: relative;
`;

const HeroText = styled.div`
  position: absolute;
  text-align: center;
  z-index: 200;
  width: 100%;
  color: white;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HeroTitle = styled.h1`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  line-height: 130%;

  @media screen and (max-width: 450px) {
    font-size: 34px;
  }
`;

const HeroImage = styled.div`
  height: 500px;
  background: url(${Cambridge});
  /* display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  object-fit: cover; */
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center center;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);
`;

const Hr = styled.div`
  height: 4px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  width: 225px;
  border-radius: 8px;
  margin: 24px auto;
`;

const Content = styled.div`
  max-width: 1234px;
  margin: auto;
`;
