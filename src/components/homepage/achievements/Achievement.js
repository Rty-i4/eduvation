import React from "react";
import styled from "styled-components";

function Achievement() {
  return (
    <Content>
      <Number>
        708+
        <Description>
          студентов обучается
          <br />
          сейчас
        </Description>
      </Number>
      <Number>
        234
        <Description>
          Студента поступили <br />в Назарбаев Университет
        </Description>
      </Number>
      <Number>
        6.5
        <Description>
          средний балл
          <br />
          IELTS
        </Description>
      </Number>
      <Number>
        1420
        <Description>
          средний балл
          <br />
          SAT
        </Description>
      </Number>
    </Content>
  );
}

export default Achievement;

const Content = styled.div`
  display: flex;
  grid-template-columns: auto auto auto auto;
  /* width: 1024px; */
  padding: 40px 72px;
  color: white;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;

const Number = styled.h3`
  font-size: 44px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
