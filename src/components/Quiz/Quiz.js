import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { questions } from "../../Data/Questions";

import arrowRight from "../../images/arrow-right.svg";
import arrowLeft from "../../images/arrow-left.svg";
import QuizWelcomPage from "./QuizWelcomPage";
import QuizForm from "./QuizForm";
import QuizCloseButton from "./QuizCloseButton";

import pattern from "../../images/work-pattern.png";
import rocket from "../../images/rocket.png";

export default function Quiz({ isTest, handleQuiz, setIsTest }) {
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

  const ref = useRef();
  const quizRef = useRef();

  const incrementQuestion = (isCorrect, index) => {
    // if (isCorrect === true) {
    //   setScore(score + 1);
    // }

    allQuestions[currentQuestion].answerOptions.map((answerOption, i) => {
      i === index
        ? (answerOption.isSelected = true)
        : (answerOption.isSelected = false);
    });
    const selectedQ = (allQuestions[currentQuestion].answerOptions[
      index
    ].isSelected = true);
    setAllQuestions({ ...allQuestions, selectedQ });
    if (currentQuestion === allQuestions.length - 1) {
      setLastQuestion(true);
    } else {
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

  const calculateScore = () => {
    var s = 0;
    var i;
    for (i = 0; i < questions.length; i++) {
      allQuestions[i].answerOptions.map((answerOption) => {
        if (answerOption.isSelected && answerOption.isCorrect) {
          // setScore(score + 1);
          s = s + 1;
        }
      });
    }
    setScore(s);
  };

  const handleNext = () => {
    setVisible(false);
    setDisabled(true);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setTimeout(function () {
        setCurrentQuestion(nextQuestion);
      }, 400);
    } else {
      calculateScore();
      //   setTimeout(function () {
      //     // setShowScore(true);
      setQuizForm(true);

      //   }, 400);
    }

    setTimeout(function () {
      setDisabled(false);
    }, 1000);
  };

  const handlePrevious = () => {
    // setVisible(!visible);
    setVisible(false);
    setDisabled(true);
    const nextQuestion = currentQuestion - 1;

    if (nextQuestion < questions.length && nextQuestion > -1) {
      setTimeout(function () {
        setCurrentQuestion(nextQuestion);
      }, 400);
    } else {
      setCurrentQuestion(0);
      setVisible(true);
    }

    setTimeout(function () {
      setDisabled(false);
    }, 1000);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      //   console.log("This will run after 1 second!");
      setVisible(!visible);
    }, 400);
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
            ) : quizForm ? (
              <QuizForm action={action} backToQuiz={backToQuiz} />
            ) : (
              <Section welcome={welcome}>
                <Content>
                  <TitleWrapper>
                    <P>Placement test</P>

                    <P>
                      {currentQuestion + 1}/{questions.length}
                    </P>
                  </TitleWrapper>
                  <Hr />
                  {showScore ? (
                    <>
                      <Score showScore={showingScore}>
                        <CheckWrapper>
                          <CheckMark />
                        </CheckWrapper>
                        <h4
                          style={{
                            color: "#fff",
                            fontWeight: 500,
                            margin: "32px",
                          }}
                        >
                          You scored {score} out of {questions.length}
                        </h4>
                        <Button2
                          visible={"true"}
                          onClick={() => handleTryAgain()}
                        >
                          Try again
                        </Button2>
                      </Score>
                    </>
                  ) : (
                    <>
                      <QuestionCard isVisible={questionVisible}>
                        <TitleContainer visible={visible}>
                          <QuestionTitle visible={visible}>
                            {allQuestions[currentQuestion].questionText}
                          </QuestionTitle>
                        </TitleContainer>

                        {allQuestions[currentQuestion].answerOptions.map(
                          (answerOption, index) => (
                            <Button
                              key={index}
                              visible={visible}
                              isSelected={answerOption.isSelected}
                              disabled={disabled}
                              onClick={() =>
                                incrementQuestion(
                                  answerOption.isCorrect,
                                  //   answerOption.isSelected
                                  index
                                )
                              }
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
                          disabled={disabled}
                        >
                          Next <img src={arrowRight} alt="arrow-right" />
                        </ButtonNext>
                      </Buttons>
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
  z-index: 10;
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
  height: 600px;

  border: 4px solid #1e2127;
  border-radius: 20px;
  display: grid;
  visibility: ${(props) => (props.isTest ? "visible" : "hidden")};
  /* grid-template-columns: auto 490px; */
  /* filter: drop-shadow(0px 20px 40px rgba(108, 105, 117, 0.5)); */
  /* box-shadow: 0px 20px 40px rgba(108, 105, 117, 0.15); */
  /* overflow-x: hidden; */
  /* overflow: ${({ quizForm }) => (quizForm ? "visible" : "hidden")}; */
  /* @media screen and (max-width: 500px) {
    width: 300px;
  } */
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
  animation: TransitioningBackground 0.5s ease-out 0.1s 1 normal forwards;
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
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
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
  transform: translateX(${(props) => (props.visible ? "0px" : "-30px")});
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  :hover {
    div {
      background-color: #fff;
    }
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
  transform: translateX(${(props) => (props.visible ? "0px" : "-30px")});
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;

const QCBW = styled.div`
  position: absolute;
  right: 40px;
  top: -20px;
`;
