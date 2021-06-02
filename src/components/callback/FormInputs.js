import React, { useState } from "react";
import styled from "styled-components";

import NumberFormat from "react-number-format";

import ProfileImage from "../../images/Iconly/Bulk/Profile.svg";
import CallingImage from "../../images/Iconly/Bulk/Calling.svg";
import Select from "./Select";
import SendButton from "./SendButton";
import axios from "axios";
// import { SuccessText } from "../../layout/TextStyles";

function FormInputs({ text, action, score, subject, allQuestions }) {
  const [emptyNumber, setEmptyNumber] = useState(false);
  const [emptyName, setEmptyName] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorSelect, setErrorSelect] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [resText, setResText] = useState("Заявка принята!");

  // Select toggle
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const newCallback = {
    name: "",
    subject: `${subject || "-"}`,
    city: ``,
    phone: "",
    mailTo: "astanamerit@gmail.com",
    text: "-",
    // score: `${score || "-"}`,
    score: `${score ? `${score} из ${allQuestions.length}` : "-"}`,
    result: score,
  };

  const [post, setPost] = useState(newCallback);

  // handle  inputs
  const handleName = (e) => {
    setEmptyName(true);
    setPost({ ...post, name: e.target.value });
    post.name.length > 2 && setErrorName(false);
    console.log(post.name);
  };

  const handlePhone = (e) => {
    setEmptyNumber(true);
    setPost({ ...post, phone: e.target.value });
    post.phone.length === 18 && setErrorPhone(false);
  };
  const handleSelect = (value) => () => {
    // setEmptyNumber(true);
    setErrorSelect(false);
    setSelectedOption(value);
    setIsOpen(false);
    setPost({ ...post, city: value });
  };

  const addCallback = (e) => {
    e.preventDefault();
    switch (selectedOption) {
      case "Aktobe":
        setPost({ ...newCallback, mailTo: "oxfordvision16@gmail.com" });
        break;
      case "Atyrau":
        setPost({ ...newCallback, mailTo: "amityacademy2016@gmail.com" });
        break;
      case "Nur-Sultan":
        setPost({ ...newCallback, mailTo: "astanamerit@gmail.com" });
        break;
      case "Almaty":
        setPost({ ...newCallback, mailTo: "rturniyazov@mail.ru" });
        break;
      default: {
        setPost({ ...newCallback, mailTo: "astanamerit@gmail.com" });
      }
    }

    post.name.length < 3 ? setErrorName(true) : setErrorName(false);
    // setErrors({ ...errors, nameError: "Введите правильное имя" });
    post.phone.length < 18 ? setErrorPhone(true) : setErrorPhone(false);

    selectedOption === null ? setErrorSelect(true) : setErrorSelect(false);
    // setErrors({ ...errors, phoneError: "Введите правильный номер" });
    score && setPost({ ...post, score: `${score} из ${allQuestions.length}` });
    // if (errorName === false && errorPhone === false) {
    if (
      post.name.length < 3 ||
      post.phone.length < 18 ||
      selectedOption === null
    ) {
      console.log("wrong credentials", post.phone);
      // {
      //   action && action();
      // }
    } else {
      // console.log(score, post.score);
      console.log("success");
      setIsLoading(true);
      axios
        .post("/callback", post)
        .then((res) => {
          // console.log(res.data.message);
          // console.log(post);
          setIsLoading(false);
          setSuccess(true);
          {
            action && action();
          }
        })
        .catch((err) => {
          setResText("Попробуйте заново");
          setSuccess(true);
          setIsLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <FormWrapper>
      <InputContainer isError={handleName}>
        <Img src={ProfileImage} />
        <Input
          type="text"
          placeholder="Введите ваше имя"
          onChange={handleName}
          errorName={errorName}
          isError={errorName}
          isEmpty={emptyName}
          required
        ></Input>
      </InputContainer>
      <InputContainer isError={errorPhone}>
        <Img src={CallingImage} />
        <NumberFormat
          customInput={Input}
          isNumericString={true}
          format="+7 (###) ###-##-##"
          mask="_"
          allowEmptyFormatting
          type="tel"
          onChange={handlePhone}
          isError={errorPhone}
          isEmpty={emptyNumber}
          required
        />
        {/* <Input
          type="tel"
          placeholder="+7 (***) *** ** **"
          maxLength="11"
        ></Input> */}
      </InputContainer>
      <Select
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleSelect={handleSelect}
        toggling={toggling}
        isOpen={isOpen}
        isError={errorSelect}
        setIsOpen={setIsOpen}
      />

      <SendButton
        text={success ? resText : text}
        action={addCallback}
        loading={loading}
      />

      {/* {success ? <SuccessText>Заявка успешно отправлена!</SuccessText> : null} */}
    </FormWrapper>
  );
}

export default FormInputs;

const FormWrapper = styled.form`
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const InputContainer = styled.div`
  position: relative;
  /* margin: 0 20px; */
  /* border: 2px solid yellow; */
  margin: auto;

  input {
    /* border: ${(props) => (props.isError ? "2px solid red" : "none")}; */
    /* border: 2px solid red; */
  }
`;

const Input = styled.input`
  font-size: 16px;
  position: relative;
  margin-top: 20px;
  /* width: 100%; */
  /* padding: 12px 60px; */
  /* background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  ); */
  background-color: #f8f8f8;
  /* border: 2px solid; */
  /* border: ${(props) => (props.errorName ? "2px solid red" : "none")}; */
  border: ${(props) => (props.isError ? "2px solid red" : "2px solid #1E2127")};
  /* border: none; */
  /* border-color: red; */
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
  color: ${(props) => (props.isEmpty ? "#4f4f4f" : "#b1b1b1")};

  border-radius: 16px;
  border-radius: 8px;
  height: 50px;
  width: 290px;
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
  @media screen and (max-width: 320px) {
    width: 80vw;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 32px;
  right: 16px;
  z-index: 1;

  @media screen and (max-width: 320px) {
    right: 18%;
  }
`;
