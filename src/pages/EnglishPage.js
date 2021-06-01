import React, { useState } from "react";
import styled from "styled-components";
import CourseJumbo from "../components/jumbotron/CourseJumbo";
import PageHero from "../components/PageHero/PageHero";
import london from "../images/london.jpg";

// Images
import ielts7 from "../images/ielts7.svg";
import Quiz from "../components/Quiz/Quiz";
import Quiz2 from "../components/Quiz/Quiz2";
import { callbackQuestions } from "../Data/CallbackQuestions";

function EnglishPage() {
  const [isTest, setIsTest] = useState(false);

  const handleQuiz = () => {
    setIsTest(!isTest);
  };

  const closeQuiz = () => {
    setIsTest(false);
  };

  // Survey
  const [isSurvey, setIsSurvey] = useState(false);

  const handleSurvey = () => {
    setIsSurvey(!isSurvey);
  };

  const closeSurvey = () => {
    setIsSurvey(false);
  };

  return (
    <Wrapper>
      <PageHero
        title="Английский язык"
        description={
          <div>Начните говорить на иностранном языке уже через 5 недель!</div>
        }
        image={london}
        secondAction={handleQuiz}
        action={handleSurvey}
      />
      <Quiz isTest={isTest} handleQuiz={closeQuiz} />
      <Quiz2
        isTest={isSurvey}
        handleQuiz={closeSurvey}
        questions={callbackQuestions}
        downloadLink="https://drive.google.com/file/d/1N2AoAlNsdRc-oqs2AmM5_pRRH0J7Jl-1/view"
        // "https://drive.google.com/file/d/1N2AoAlNsdRc-oqs2AmM5_pRRH0J7Jl-1/view"
        // link for sample tests
        // https://drive.google.com/drive/folders/1t4TB8Q75JS6219iql6t2Iimq6yikJQDq?usp=sharing

        // SAT
        // https://drive.google.com/file/d/1GJDjhx9NY4pX5CedW9B5JwbiZeipbSh4/view?usp=sharing
      />
      <CourseJumbo
        mainText={
          <div>
            Современный метод <br /> обучения
          </div>
        }
        subText={
          <div>
            <p>
              Вы не будете зубрить слова и читать учебники, как в школе. Весь
              материал усваивается естественным образом по методике ESL во время
              разговорных упражнений.
            </p>

            <p>
              <br />
              Вы научитесь говорить и понимать английскую речь, а не только
              усвоите теоретический материал. Вы постоянно будете общаться,
              тренируя и развивая свои навыки.
            </p>
          </div>
        }
        image={ielts7}
      />
    </Wrapper>
  );
}

export default EnglishPage;

const Wrapper = styled.div``;
