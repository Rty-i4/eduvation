import React, { useState } from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero/PageHero";
import library from "../images/library.jpg";

import ielts7 from "../images/ielts7.svg";
import learning from "../images/Iconly/Bulk/learning.svg";
import Crit from "../images/Iconly/Bulk/Crit.svg";

import CourseJumbo from "../components/jumbotron/CourseJumbo";
import { callbackQuestions } from "../Data/CallbackQuestions";
import Quiz2 from "../components/Quiz/Quiz2";

function SatPage() {
  const [isTest, setIsTest] = useState(false);

  const handleQuiz = () => {
    setIsTest(!isTest);
  };

  const closeQuiz = () => {
    setIsTest(false);
  };

  return (
    <Wrapper>
      <PageHero
        title="SAT"
        description={
          <div>
            Сдайте SAT на 1500+ <br />
            по нашей уникальной программе
          </div>
        }
        image={library}
        action={handleQuiz}
        secondAction={handleQuiz}
      />
      <Quiz2
        isTest={isTest}
        handleQuiz={closeQuiz}
        questions={callbackQuestions}
        downloadLink="https://drive.google.com/file/d/1GJDjhx9NY4pX5CedW9B5JwbiZeipbSh4/view?usp=sharing"
        // "https://drive.google.com/file/d/1N2AoAlNsdRc-oqs2AmM5_pRRH0J7Jl-1/view"
        // link for sample tests
        // https://drive.google.com/drive/folders/1t4TB8Q75JS6219iql6t2Iimq6yikJQDq?usp=sharing

        // SAT
        // https://drive.google.com/file/d/1GJDjhx9NY4pX5CedW9B5JwbiZeipbSh4/view?usp=sharing
      />
      <Content>
        <CourseJumbo
          reverse={true}
          mainText={
            <div>
              Что такое SAT
              <br />
            </div>
          }
          subText={
            <div style={{ textAlign: "left" }}>
              <p>
                SAT – это экзамен, результаты которого учитываются при
                поступлении в высшие учебные заведени
              </p>
              <br />
              <p>
                SAT состоит из 4 секций: <br />
              </p>
              <ul style={{ textAlign: "left", lineHeight: "180%" }}>
                <br />
                <li>• Reading</li>
                <li>• Writing</li>
                <li>• Language</li>

                <li>• Math (c калькулятором)</li>
                <li>• Math (без калькулятором)</li>
                <li>
                  • Essay - дополнительная секция написания сочинения (по
                  требованию университета).{" "}
                </li>
                <br />
                <p>
                  Оценивается по шкале от 400 до 1600 баллов. <br />
                  Тестирование проводится в "бумажном" формате. Большинство
                  заданий имеют четыре варианта ответов. <br />
                  Продолжительность тестирования - 3 часа 50 минут (с
                  сочинением) или 3 часа (без сочинения)
                </p>
              </ul>
            </div>
          }
          image={Crit}
        />
        <CourseJumbo
          reverse={false}
          mainText={
            <div>
              Что вы получите от курса подготовки к SAT?
              <br />
            </div>
          }
          subText={
            <div>
              <ul style={{ textAlign: "left", lineHeight: "180%" }}>
                <br />
                <li>• Проработаете все "подводные камни"</li>
                <li>
                  • Выучите правила академической грамматики и необходимую
                  терминологию
                </li>
                <li>
                  • Узнаете специфику текстовых задач и заданий с табличными
                  данными
                </li>

                <li>• Узнаеете как выжать максимальный балл</li>
              </ul>
            </div>
          }
          image={learning}
        />
        <CourseJumbo
          reverse={true}
          mainText={
            <div>
              Большой опыт подготовки к SAT
              <br />
            </div>
          }
          subText={
            <div
              style={{
                textAlign: "left",
                lineHeight: "180%",
                // fontWeight: "600",
                // fontSize: 18,
              }}
            >
              Специализированные курсы SAT могут дать подготовку, которую
              невозможно получить самостоятельно.
              <br />
              <br /> Послe окончания у кандидата есть все необходимые знания и
              навыки, а также хороший практический опыт тестирования и запас
              уверенности в себе.
            </div>
          }
          image={ielts7}
        />
      </Content>
    </Wrapper>
  );
}

export default SatPage;

const Wrapper = styled.div``;

const Content = styled.div`
  max-width: 1234px;
  margin: auto;
`;
