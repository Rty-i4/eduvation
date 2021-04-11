import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

import NumberFormat from "react-number-format";

import arrowRight from "../../images/arrow-right.svg";
import arrowLeft from "../../images/arrow-left.svg";
import QuizWelcomPage from "./QuizWelcomPage";
import QuizForm from "./QuizForm";
import QuizCloseButton from "./QuizCloseButton";

import pattern from "../../images/work-pattern.png";
import rocket from "../../images/rocket.png";
import download from "../../images/Iconly/Download.svg";
import { Loader } from "../callback/Loader";

export default function Quiz2({
  isTest,
  handleQuiz,
  setIsTest,
  subject,
  questions,
}) {
  const [welcome, setWelcome] = useState(true);
  const [allQuestions, setAllQuestions] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [showingScore, setShowingScore] = useState(false);
  const [quizForm, setQuizForm] = useState(false);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [englishLevel, setEnglishLevel] = useState("");

  // from form inputs

  const [emptyNumber, setEmptyNumber] = useState(false);
  const [emptyName, setEmptyName] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [success, setSuccess] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorSelect, setErrorSelect] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [resText, setResText] = useState("Заявка принята!");

  // post
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [levelOfEnglish, setLevelOfEnglish] = useState("");
  const [city, setCity] = useState("");
  const [certificate, setCertificate] = useState("");
  const [phone, setPhone] = useState("");

  // end

  const ref = useRef();
  const quizRef = useRef();

  const newCallback = {
    name: name,
    subject: subject,
    city: city,
    phone: phone,
    mailTo: "renatilyasov95@gmail.com",
    text: "-",
    levelOfEnglish: levelOfEnglish,
    time: time,
    certificate: certificate,
    // score: `${score || "-"}`,
    // score: `${score ? `${score} из ${allQuestions.length}` : "-"}`,
    // result: score,
  };

  const [post, setPost] = useState(newCallback);
  // const [name, setName] = useState("");
  // TODO: handle  inputs
  const [inputValue, setInputValue] = useState("");

  const handleName = (e) => {
    // setEmptyName(true);
    const value = e.target.value;
    // setInputValue(e.target.value);
    switch (currentQuestion) {
      case 1:
        setName(value);
        setPost({
          ...post,
          name: e.target.value,
          // add city state city: city;
          // allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        // setInputValue(city);
        // setPost({ ...post, city: value });
        break;
      case 2:
        setCity(value);
        setPost({
          ...post,
          city: e.target.value,
          // add city state city: city;
          // allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        // setInputValue(name);
        // setPost({ ...post, name: value });
        break;
      case 3:
        setYear(value);
        setPost({
          ...post,
          year: e.target.value,
          // add city state city: city;
          // allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        // setInputValue(year);
        // setPost({ ...post, year: value });
        break;
      case 4:
        setCertificate(value);
        // setInputValue(certificate);
        // setPost({ ...post, certificate: value });
        setPost({
          ...post,
          certificate: e.target.value,
          // add city state city: city;
          // allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        break;
      case 6:
        setTime(value);
        setPost({
          ...post,
          time: e.target.value,
          // add city state city: city;
          // allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        // setInputValue(time);
        // setPost({ ...post, time: value });
        break;
      case 7:
        setPhone(e.target.value);
        setPost({
          ...post,
          phone: e.target.value,
          // add city state city: city;
          // allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        // setInputValue(phone);
        // setPost({ ...post, phone: value });
        break;

      default:
        break;
    }

    setName(e.target.value);
    post.name.length > 2 && setErrorName(false);

    // console.log(e.target.value);/
  };
  const handleSubject = (e) => {
    // setPost({ ...post, name: e.target.value });
    console.log(e.target.value);
  };

  const handlePhone = (e) => {
    setEmptyNumber(true);
    setPhone(e.target.value);
    setPost({ ...post, phone: e.target.value });
    console.log(post.phone.length);
    // post.phone.length === 18 && setErrorPhone(false);
  };

  // TODO : Add callback !!!

  const addCallback = (e) => {
    // e.preventDefault();
    // switch (selectedOption) {
    //   case "Nur-Sultan":
    //     setPost({...newCallback, mailTo: "oxfordvision@info.org"});
    //     break;
    //   case "Nur-Sultan":
    //     setPost({...newCallback, mailTo: "amityacademy@info.org"});
    //     break;
    //   case "Nur-Sultan":
    //     setPost({...newCallback, mailTo: "astanamerit@gmail.com"});
    //     break;
    //   case "Nur-Sultan":
    //     setPost({...newCallback, mailTo: "oxfordvision@info.org"});
    //     break;
    // }

    post.name.length < 3 ? setErrorName(true) : setErrorName(false);
    // setErrors({ ...errors, nameError: "Введите правильное имя" });
    post.phone.length < 18 ? setErrorPhone(true) : setErrorPhone(false);

    selectedOption === null ? setErrorSelect(true) : setErrorSelect(false);
    // setErrors({ ...errors, phoneError: "Введите правильный номер" });
    score && setPost({ ...post, score: `${score} из ${allQuestions.length}` });
    // if (errorName === false && errorPhone === false) {
    // if (
    //   // post.name.length < 3 ||
    //   post.phone.length < 18
    //   // ||
    //   // selectedOption === null
    // ) {
    //   console.log("wrong credentials", post.phone);
    //   // {
    //   //   action && action();
    //   // }
    // } else {
    //   // console.log(score, post.score);
    //   console.log("success");
    //   setIsLoading(true);
    //   axios
    //     .post("/callback", post)
    //     .then((res) => {
    //       // console.log(res.data.message);
    //       // console.log(post);
    //       setIsLoading(false);
    //       setSuccess(true);
    //       {
    //         action && action();
    //       }
    //     })
    //     .catch((err) => {
    //       setResText("Попробуйте заново");
    //       setSuccess(true);
    //       setIsLoading(false);
    //       console.log(err);
    //     });
    // }

    // console.log("success");
    setIsLoading(true);
    axios
      .post("/callback", post)
      .then((res) => {
        // console.log(res.data.message);
        // console.log(post);
        console.log("success");
        setSuccess(true);
        setShowScore(true);
        setIsLoading(false);
        {
          action && action();
        }
      })
      .catch((err) => {
        setResText("Попробуйте заново");
        setSuccess(false);
        setShowScore(true);
        setIsLoading(false);
        console.log(err);
      });
  };

  // handle post

  const makeSelected = (index) => {
    allQuestions[currentQuestion].answerOptions.map((answerOption, i) => {
      i === index
        ? (answerOption.isSelected = true)
        : (answerOption.isSelected = false);
    });

    const selectedQ = (allQuestions[currentQuestion].answerOptions[
      index
    ].isSelected = true);

    setAllQuestions({ ...allQuestions, selectedQ });
  };

  const incrementQuestion = (isCorrect, index) => {
    makeSelected(index);

    switch (currentQuestion) {
      case 0:
        setPost({
          ...post,
          subject:
            allQuestions[currentQuestion].answerOptions[index].answerText,
        });
        break;

      case 1:
        allQuestions[currentQuestion].answerOptions[index].isInput
          ? setPost({
              ...post,
            })
          : setPost({
              ...post,
              name:
                allQuestions[currentQuestion].answerOptions[index].answerText,
            });
        break;
      case 2:
        if (allQuestions[currentQuestion].answerOptions[index].isInput) {
          setPost({
            ...post,
          });
        } else {
          setPost({
            ...post,
            city: allQuestions[currentQuestion].answerOptions[index].answerText,
          });
        }
        break;
      case 3:
        allQuestions[currentQuestion].answerOptions[index].isInput
          ? setPost({
              ...post,
            })
          : setPost({
              ...post,
              year:
                allQuestions[currentQuestion].answerOptions[index].answerText,
            });
        break;
      case 4:
        allQuestions[currentQuestion].answerOptions[index].isInput
          ? setPost({
              ...post,
            })
          : setPost({
              ...post,
              certificate:
                allQuestions[currentQuestion].answerOptions[index].answerText,
            });
        console.log(post);
        break;
      case 5:
        allQuestions[currentQuestion].answerOptions[index].isInput
          ? setPost({
              ...post,
            })
          : setPost({
              ...post,
              levelOfEnglish:
                allQuestions[currentQuestion].answerOptions[index].answerText,
            });
        break;
      case 6:
        allQuestions[currentQuestion].answerOptions[index].isInput
          ? setPost({
              ...post,
            })
          : setPost({
              ...post,
              time:
                allQuestions[currentQuestion].answerOptions[index].answerText,
            });
        console.log(post);
        break;
      case 7:
        allQuestions[currentQuestion].answerOptions[index].isInput
          ? setPost({
              ...post,
            })
          : setPost({
              ...post,
              phone:
                allQuestions[currentQuestion].answerOptions[index].answerText,
            });
        break;

      default:
        break;
    }

    if (currentQuestion !== allQuestions.length - 1) {
      handleNext();
    }
  };

  const action = () => {
    setQuizForm(false);
    setShowScore(true);
  };

  const backToQuiz = () => {
    setQuizForm(false);
    setVisible(true);
  };

  const closeWelcome = () => {
    setWelcome(false);
  };

  const clearIsSelected = () => {
    var i;
    for (i = 0; i < questions.length; i++) {
      allQuestions[i].answerOptions.map((answerOption) => {
        answerOption.isSelected = false;
      });
    }
  };

  const handleTryAgain = () => {
    setScore(0);
    setVisible(false);
    setWelcome(true);
    setShowScore(false);
    setQuizForm(false);
    clearIsSelected();

    setAllQuestions(questions);
    setCurrentQuestion(0);
  };

  const handleNext = () => {
    setVisible(false);
    setDisabled(true);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setTimeout(function () {
        setCurrentQuestion(nextQuestion);
      }, 300);
    } else {
      // calculateScore();
      // handleLevel(score);
      // setQuizForm(true);
      //   }, 400);
      // action = { action };
      console.log(post);

      addCallback();
      // setShowScore(true);
    }

    setTimeout(function () {
      setDisabled(false);
    }, 600);
  };

  const handlePrevious = () => {
    setVisible(false);
    setDisabled(true);
    const nextQuestion = currentQuestion - 1;

    if (nextQuestion < questions.length && nextQuestion > -1) {
      setTimeout(function () {
        setCurrentQuestion(nextQuestion);
      }, 300);
    } else {
      setCurrentQuestion(0);
      setVisible(true);
    }

    setTimeout(function () {
      setDisabled(false);
    }, 600);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      //   console.log("This will run after 1 second!");
      setVisible(!visible);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentQuestion]);

  useEffect(() => {
    setTimeout(function () {
      setShowingScore(!showingScore);
    }, 800);
  }, [showScore]);

  // Click outside refs

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !quizRef.current.contains(event.target)
    ) {
      // console.log("hello");
      setVisible(true);
      handleQuiz();
      // setIsTest(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <BackLayer isTest={isTest}>
      {isTest ? (
        <Container quizForm={quizForm} isTest={isTest} ref={quizRef}>
          <QCBW ref={ref}>
            <QuizCloseButton handleQuiz={handleQuiz} />
          </QCBW>
          <ContentWrapper quizForm={quizForm} isTest={isTest}>
            {welcome ? (
              <QuizWelcomPage setWelcome={closeWelcome} />
            ) : (
              <Section welcome={welcome}>
                <Content>
                  <TitleWrapper>
                    <P>Мини опрос</P>

                    <P>
                      {currentQuestion + 1}/{questions.length}
                    </P>
                  </TitleWrapper>
                  <Hr />
                  {loading ? (
                    // LOADER

                    <Loader />
                  ) : showScore ? (
                    <Score showScore={showingScore}>
                      {success ? (
                        <>
                          <CheckWrapper>
                            <CheckMark />
                          </CheckWrapper>
                          <ScoreText>
                            Ваша заявка принята!
                            <br />
                            <ScoreP>
                              Мы свяжемся с вами в ближайшее время
                            </ScoreP>
                          </ScoreText>
                          {/* <Button2
                            visible={"true"}
                            onClick={() => {
                              handleTryAgain();
                              handleQuiz();
                            }}
                          >
                            Ок
                          </Button2> */}
                          {/* <CheckWrapper> */}
                          <a
                            href="https://drive.google.com/file/d/1N2AoAlNsdRc-oqs2AmM5_pRRH0J7Jl-1/view"
                            target="_blank"
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                flexDirection: "column",
                                cursor: "pointer",
                              }}
                            >
                              <DownloadText>Ваш бонус</DownloadText>
                              <img
                                style={{ width: 66, height: 66 }}
                                src={download}
                              />
                            </div>
                          </a>
                          {/* </CheckWrapper> */}
                        </>
                      ) : (
                        <>
                          <ScoreText>
                            Что-то пошло не так!
                            <ScoreP>Попробуйте еще раз</ScoreP>
                          </ScoreText>
                          <Button2
                            visible={"true"}
                            onClick={() => {
                              handleTryAgain();
                              // handleQuiz();
                            }}
                          >
                            Ок
                          </Button2>
                        </>
                      )}
                    </Score>
                  ) : (
                    // QUESTIONS
                    <>
                      <QuestionCard isVisible={questionVisible}>
                        <TitleContainer visible={visible}>
                          <QuestionTitle visible={visible}>
                            {allQuestions[currentQuestion].questionText}
                          </QuestionTitle>
                        </TitleContainer>

                        {allQuestions[currentQuestion].answerOptions.map(
                          (answerOption, index) =>
                            currentQuestion === 7 ? (
                              <NumberFormat
                                customInput={Input}
                                isNumericString={true}
                                format="+7 (###) ###-##-##"
                                mask="_"
                                allowEmptyFormatting
                                type="tel"
                                onChange={handlePhone}
                                visible={visible}
                                isError={errorPhone}
                                isEmpty={emptyNumber}
                                isSelected={answerOption.isSelected}
                                key={index}
                                required
                              />
                            ) : answerOption.isInput ? (
                              <Input
                                type={answerOption.type}
                                placeholder={answerOption.placeholder}
                                key={index}
                                visible={visible}
                                isSelected={answerOption.isSelected}
                                onFocus={() => {
                                  makeSelected(index);
                                }}
                                onChange={handleName}
                                value={
                                  currentQuestion === 1
                                    ? name
                                    : currentQuestion === 2
                                    ? city
                                    : currentQuestion === 3
                                    ? year
                                    : currentQuestion === 4
                                    ? certificate
                                    : currentQuestion === 6
                                    ? time
                                    : currentQuestion === 7
                                    ? phone
                                    : inputValue
                                }
                              />
                            ) : (
                              <Button
                                key={index}
                                visible={visible}
                                isSelected={answerOption.isSelected}
                                disabled={disabled}
                                onClick={() => {
                                  incrementQuestion(
                                    answerOption.isCorrect,
                                    //   answerOption.isSelected
                                    index
                                  );
                                }}
                              >
                                <Circle isSelected={answerOption.isSelected} />
                                {answerOption.answerText}
                              </Button>
                            )
                        )}
                      </QuestionCard>
                      <Buttons>
                        <ButtonBack
                          onClick={() => handlePrevious()}
                          disabled={disabled}
                        >
                          <img src={arrowLeft} alt="arrow-left" />
                        </ButtonBack>
                        <ButtonNext
                          onClick={() => handleNext()}
                          disabled={
                            disabled ||
                            (currentQuestion === 1 && name.length < 3) ||
                            (currentQuestion === 7 && phone.length < 18)
                          }
                          notActive={
                            (currentQuestion === 1 && name.length < 3) ||
                            (currentQuestion === 7 && post.phone.length < 18)
                          }
                        >
                          Next <img src={arrowRight} alt="arrow-right" />
                        </ButtonNext>
                      </Buttons>
                      {/* <button
                        onClick={() => {
                          setCurrentQuestion(49);
                        }}
                      >
                        Last
                      </button> */}
                    </>
                  )}
                </Content>
              </Section>
            )}
            <Section2>
              <Pattern src={pattern} />
              <RocketImg src={rocket} />
            </Section2>
          </ContentWrapper>
        </Container>
      ) : null}
    </BackLayer>
  );
}
const BackLayer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  z-index: 30;
  height: 100vh;
  min-height: 100%;
  min-height: -webkit-fill-available;
  width: 100vw;
  min-width: 100%;
  backdrop-filter: blur(10px) saturate(100%);
  background: rgba(0, 0, 0, 0.3);

  transform: translate(-50%, ${(props) => (props.isTest ? "-50%" : "-47%")});
  opacity: ${(props) => (props.isTest ? 1 : 0)};
  visibility: ${(props) => (props.isTest ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #0d0d0d;
  width: 94%;
  max-width: 1024px;
  /* margin: 40px 20px; */
  max-height: 600px;
  height: 90vh;

  border: 4px solid #1e2127;
  border-radius: 20px;
  display: grid;
  visibility: ${(props) => (props.isTest ? "visible" : "hidden")};
`;

const ContentWrapper = styled.div`
  height: inherit;
  width: 100%;
  overflow: ${({ quizForm }) => (quizForm ? "visible" : "hidden")};
  display: inherit;
  visibility: ${(props) => (props.isTest ? "visible" : "hidden")};
  /* overflow: hidden; */
  height: 100%;
  display: grid;
  grid-template-columns: auto 400px;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Section = styled.div`
  @keyframes TransitioningBackground {
    0% {
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  position: relative;
  opacity: 0;
  transform: scale(0.97);
  animation: TransitioningBackground 0.3s ease-out 0.1s 1 normal forwards;
`;

const Section2 = styled.div`
  position: relative;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 0 16px 16px 0;
  overflow: hidden;
  /* z-index: 0; */
  /* height: 593px; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Pattern = styled.img`
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  max-height: 100%;
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

const Content = styled.div`
  /* position: relative; */
  margin: 32px 16px 60px 16px;
`;

const Hr = styled.div`
  display: block;
  margin: 20px 0;
  height: 4px;
  width: 100%;
  border-radius: 16px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  /* background-color: #fff; */
  /* border-style: solid; */
`;

const P = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #e0e0e0;
  margin: 0;
`;

const QuestionTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 40px 0 40px;
  color: #fff;

  /* visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transform: translateX(${(props) => (props.visible ? "0px" : "-30px")}); */
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  @media screen and (max-width: 320px) {
    margin: 20px 0;
  }
`;

const Button = styled.button`
  width: 100%;
  font-size: 16px;
  color: #fff;
  font-family: "Gilroy";
  font-weight: 500;
  background-color: #1e2127;
  border-radius: 10px;
  border: solid;
  border-width: ${(props) => (props.isSelected ? "2px" : "2px")};
  border-color: ${(props) => (props.isSelected ? "#fff" : "#0d0d0d")};
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transform: translateX(${(props) => (props.visible ? "0px" : "-10px")});
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  :hover {
    div {
      background-color: #fff;
    }
  }
`;

const Input = styled.input`
  /* max-width: 90%; */
  width: 92%;
  font-size: 16px;
  color: #fff;
  font-family: "Gilroy";
  font-weight: 500;
  background-color: #1e2127;
  border-radius: 10px;
  border: solid;
  border-width: ${(props) => (props.isSelected ? "2px" : "2px")};
  border-color: ${(props) => (props.isSelected ? "#fff" : "#0d0d0d")};
  display: flex;
  padding: 10px;
  /* padding-left: 40px; */
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 16px;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transform: translateX(${(props) => (props.visible ? "0px" : "-10px")});
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  /* :hover {
    div {
      background-color: #fff;
    }
  } */

  ::placeholder {
    color: #b1b1b1;
  }

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 320px) {
    max-width: 60vw;
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.isSelected ? "#fff" : "#e0e0e0")};
  margin-right: 16px;
`;

const Button2 = styled.button`
  width: 200px;
  font-size: 16px;
  color: #e0e0e0;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 16px;
  outline: none;
  border: none;
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: "Gilroy";
  /* border: 1px solid #c3c5ff; */
  cursor: pointer;
  margin-bottom: 16px;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transform: translateX(${(props) => (props.visible ? "0px" : "-30px")});
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  :hover {
    background-color: #e0e1ff;
    /* transform: translateX(-20px); */
  }
`;

const QuestionCard = styled.div`
  /* opacity: 0.8; */
  /* display: ${(props) => (props.isVisible ? "block" : "none")}; */
  display: block;
  /* visibility: "hidden"; */
`;

const Score = styled.div`
  @keyframes TransitioningBackground {
    0% {
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  /* opacity: ${(props) => (props.showScore ? "1" : "0")}; */
  /* transition: 0.8s all ease-in; */
  opacity: 0;
  animation: TransitioningBackground 0.4s ease-out 0.1s 1 normal forwards;

  @media screen and (max-width: 320px) {
    margin-top: 20px;
  }
`;

const ButtonNext = styled.button`
  /* float: right; */
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  /* background: linear-gradient(0deg, #4e59f5, #4e59f5); */
  /* border: 1px solid #c3c5ff; */
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  /* line-height: 20px; */
  font-weight: 600;
  opacity: ${(props) => (props.notActive ? "0.4" : "1")};

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6px;
  align-items: center;
  justify-content: center;

  :hover {
    background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  }

  img {
    height: 18px;
    margin-bottom: 1px;
  }
`;

const ButtonBack = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #bdbdbd;
  display: flex;
  background: #1e2127;
  align-items: center;
  justify-content: center;

  :hover {
    border-color: #4ea732;
  }

  img {
    height: 18px;
    color: #c3c5ff;
    margin-right: 2px;
  }
`;

const Buttons = styled.div`
  /* float: right; */
  position: absolute;
  right: 24px;
  bottom: 24px;

  display: grid;
  grid-template-columns: auto auto;
  /* margin-top: 50px; */
  grid-gap: 16px;
`;

const ImgWrapper = styled.div`
  position: relative;
  background: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const CheckMark = styled.div`
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;

  :before {
    position: absolute;
    left: 0;
    top: 50%;
    height: 50%;
    width: 6px;
    border-radius: 16px;
    background-color: #66ad2b;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }

  :after {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 6px;
    width: 100%;
    background-color: #66ad2b;
    border-radius: 16px 16px 16px 12px;
    content: "";
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

const CheckWrapper = styled.div`
  @keyframes TransitioningBackground {
    0% {
      opacity: 0;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  position: relative;
  background: #fff;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  opacity: 0;

  transform: scale(0.7);
  animation: TransitioningBackground 0.4s ease-out 0.1s 1 normal forwards;
`;

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  max-height: 100px;
  overflow-y: hidden;
  overflow-x: visible;

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transform: translateX(${(props) => (props.visible ? "0px" : "-8px")});
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;

const QCBW = styled.div`
  position: absolute;
  right: 40px;
  top: -20px;
`;

const ScoreText = styled.h4`
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  margin: 32px;
  text-align: center;
  line-height: 140%;
`;

const ScoreP = styled.p`
  color: #e0e0e0;
  font-size: 16px;
  line-height: 130%;
  padding-top: 16px;
  font-weight: 500;
`;

const DownloadText = styled.h4`
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  margin: 32px 0 0;
  text-align: center;
  line-height: 140%;

  @media screen and (max-width: 320px) {
    margin: 16px 0 0;
  }
`;
