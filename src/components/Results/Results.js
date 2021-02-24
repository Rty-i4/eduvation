import React from "react";
import styled from "styled-components";
import { H1 } from "../../layout/TextStyles";

function Results() {
  return (
    <Wrapper>
      <H1>Результаты в цифрах</H1>

      <Item>
        <H1>708</H1>
        <Subtitle>студентов обучаютс сейчас</Subtitle>
      </Item>
      <Item>
        <H1>234</H1>
        <Subtitle>Поступили в Назарбаев Университет</Subtitle>
      </Item>
      <Item>
        <H1>6.5</H1>
        <Subtitle>Средний балл IELTS</Subtitle>
      </Item>
      <Item>
        <H1>1420</H1>
        <Subtitle>Средний балл SAT</Subtitle>
      </Item>
    </Wrapper>
  );
}

export default Results;

const Wrapper = styled.div`
  margin-top: 120px;
`;

const Item = styled.div`
  margin-top: 40px;
`;

const Number = styled.p``;

const Subtitle = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
`;
