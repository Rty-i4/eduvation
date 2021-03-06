import React from "react";
import { BodyIntro, Desc } from "../../layout/TextStyles";
import FormInputs from "../callback/FormInputs";

import gift from "../../images/gift.png";
import arrowLeft from "../../images/arrow-left.svg";

import styled from "styled-components";

function QuizForm({ action, backToQuiz }) {
  return (
    <Wrapper>
      <ButtonBack onClick={backToQuiz}>
        <img src={arrowLeft} alt="arrow-left" />
      </ButtonBack>
      <Desc>Последний шаг</Desc>
      <BodyIntro>Заполни форму и получи свой бонус!</BodyIntro>
      <Img src={gift} />
      <FormInputs action={action} text="Узнать результат" />
    </Wrapper>
  );
}

export default QuizForm;

const Wrapper = styled.div`
  margin: 20px;
  @keyframes TransitioningBackground {
    0% {
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  opacity: 0;
  transform: scale(0.98);
  animation: TransitioningBackground 0.4s ease-out 0.1s 1 normal forwards;
`;

const Img = styled.img`
  width: 60px;
  height: 75px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonBack = styled.button`
  position: absolute;
  top: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  /* border: 1px solid #bdbdbd; */
  display: flex;
  /* background: #1e2127; */
  background: transparent;
  align-items: center;
  justify-content: center;

  img {
    height: 18px;
    color: #c3c5ff;
    margin-right: 2px;
  }
`;
