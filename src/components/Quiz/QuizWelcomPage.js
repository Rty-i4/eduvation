import React from "react";
import styled from "styled-components";
import { SmallText, Desc, H1, H3 } from "../../layout/TextStyles";

// Images
import pattern from "../../images/work-pattern.png";
import rocket from "../../images/rocket.png";
import gift from "../../images/gift.png";
import StartQuizButton from "../buttons/StartQuizButton";

function QuizWelcomPage({ setWelcome }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Pattern src={pattern} />
        <RocketImg src={rocket} />
      </ImageWrapper>
      <Section>
        <TextWrapper>
          <H3 align={true}>
            Хотите проверить свой <br />
            уровень английского?
          </H3>
          <Desc align={true}>
            Пройди тест и подбери подходящий
            <br />
            формат обучения
          </Desc>
          <StartQuizButton setWelcome={setWelcome} />
        </TextWrapper>

        <Bonus>
          <Img src={gift} />{" "}
          <SmallText>
            Бонус после прохождения теста <br /> Скидка 10%
          </SmallText>
        </Bonus>
      </Section>
    </Wrapper>
  );
}

export default QuizWelcomPage;

const Wrapper = styled.div`
  /* height: 578px; */
  position: relative;
  /* margin: 0 20px; */
  margin: 16px 16px;
  /* opacity: ${(props) => (props.visibility ? "1" : "0")}; */
  transition: 0.8s all ease-in;
`;

const ImageWrapper = styled.div`
  position: relative;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 10px;
  height: 233px;
  overflow: hidden;
  margin-bottom: 16px;
  @media screen and (min-width: 770px) {
    display: none;
  }
`;

const Pattern = styled.img`
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
`;

const RocketImg = styled.img`
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  max-height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Img = styled.img`
  width: 60px;
  height: 75px;
`;

const Section = styled.div`
  display: grid;
  /* grid-gap: 0px; */
  align-content: space-between;
  @media screen and (min-width: 769px) {
    margin: 80px 30px 0;
    /* margin: auto; */
    justify-content: start;

    grid-gap: 40px;
  }
`;

const Bonus = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 32px 0 0;
  align-items: end;
  justify-content: start;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    margin: auto;
    margin: 20px 0 0;
  }
`;

const TextWrapper = styled.div`
  @media screen and (min-width: 450px) {
    display: grid;
    grid-gap: 0px;
  }
`;
