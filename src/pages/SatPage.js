import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero/PageHero";
import library from "../images/library.jpg";

import ielts7 from "../images/ielts7.svg";
import learning from "../images/Iconly/Bulk/learning.svg";
import Crit from "../images/Iconly/Bulk/Crit.svg";

import CourseJumbo from "../components/jumbotron/CourseJumbo";

function SatPage() {
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
            <div>
              <p>
                SAT – это экзамен, результаты которого учитываются при
                поступлении в высшие учебные заведени
              </p>
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
              Что вы получите от курса подготовки к SAT?
              <br />
            </div>
          }
          subText={
            <div>
              Специализированные курсы SAT могут дать подготовку, которую
              невозможно получить самостоятельно. После их окончания у кандидата
              есть все необходимые знания и навыки, а также хороший практический
              опыт тестирования и запас уверенности в себе.
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
