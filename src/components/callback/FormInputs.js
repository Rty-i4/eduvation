import React, { useState } from "react";
import styled from "styled-components";

import NumberFormat from "react-number-format";

import ProfileImage from "../../images/Iconly/Bulk/Profile.svg";
import CallingImage from "../../images/Iconly/Bulk/Calling.svg";
import Select from "./Select";
import SendButton from "./SendButton";

function FormInputs({ text, action }) {
  const [emptyNumber, setEmptyNumber] = useState(false);

  const changeColor = (e) => {
    // e.preventDefault(); idk
    setEmptyNumber(true);
  };

  return (
    <FormWrapper>
      <InputContainer>
        <Img src={ProfileImage} />
        <Input type="name" placeholder="Введите ваше имя"></Input>
      </InputContainer>
      <InputContainer>
        <Img src={CallingImage} />
        <NumberFormat
          customInput={Input}
          isNumericString={true}
          format="+7 (###) ###-##-##"
          mask="_"
          allowEmptyFormatting
          type="tel"
          onChange={changeColor}
          emptyNumber={emptyNumber}
        />
        {/* <Input
          type="tel"
          placeholder="+7 (***) *** ** **"
          maxLength="11"
        ></Input> */}
      </InputContainer>
      <Select />

      <SendButton text={text} action={action} />
    </FormWrapper>
  );
}

export default FormInputs;

const FormWrapper = styled.form`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  /* margin: 0 20px; */
`;

const Input = styled.input`
  font-size: 16px;
  position: relative;
  margin-top: 20px;
  width: 100%;
  /* padding: 12px 60px; */
  /* background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  ); */
  background-color: #f8f8f8;
  /* border: 0.5px solid rgba(255, 255, 255, 0.3); */
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  box-sizing: border-box;
  padding: 10px 42px 10px 24px;
  font-style: normal;
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 17px;
  line-height: 130%;
  /* color: #4f4f4f; */
  color: ${(props) => (props.emptyNumber ? "#4f4f4f" : "#b1b1b1")};
  /* color: #b1b1b1; */
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
  height: 50px;
  width: 295px;
  /* width: 100%; */
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  ::placeholder {
    color: #b1b1b1;
  }

  &:focus {
    outline: none;
    /* padding-left: 42px; */
    /* box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 20px,
      rgb(47, 184, 255) 0px 0px 0px 1px inset; */
    /* background: linear-gradient(
      rgba(24, 32, 79, 0.4) 0%,
      rgba(24, 32, 79, 0.25) 100% */
    /* ); */
  }
`;

const Img = styled.img`
  position: absolute;
  top: 32px;
  right: 16px;
  z-index: 1;
`;
