import React from "react";
import styled from "styled-components";

import FormInputs from "./FormInputs";

function Callback() {
  return (
    <Wrapper>
      <FristWrap>
        <TextCall>
          Запишись на <span> бесплантный</span>
          <br />
        </TextCall>
        <TextCall2>
          <span>пробный урок</span> и получи скидку!
        </TextCall2>
      </FristWrap>
      <SecondWrap>
        <FormInputs />
      </SecondWrap>
      <SmallText>Сегодня записалось 12 человек</SmallText>
    </Wrapper>
  );
}

export default Callback;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-rows: auto;
  margin: 40px 20px 120px;
  /* width: 432px; */
  margin: 120px auto;
  height: 620px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 450px) {
    /* width: 380px; */
    margin-top: 80px;
    margin-bottom: 70px;
  }
`;

const FristWrap = styled.div`
  /* height: 140px; */
  background-color: #34435e;
  border-radius: 16px 16px 0 0;
`;

const SecondWrap = styled.div`
  height: 400px;
  background-color: #1e2127;
  border-radius: 0 0 16px 16px;
`;

const TextCall = styled.p`
  padding: 32px 17px 0px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  line-height: 130%;
  font-size: 20px;

  span {
    background: linear-gradient(91.26deg, #99f36f 1.96%, #5dea45 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const TextCall2 = styled.p`
  padding: 0px 17px 32px 17px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  line-height: 130%;
  font-size: 20px;

  span {
    background: linear-gradient(91.26deg, #99f36f 1.96%, #5dea45 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const SmallText = styled.p`
  color: #f8f8f8;
  text-align: center;
  margin-top: 24px;
  opacity: 0.7;
  font-weight: 500;
`;
