import React from "react";
import styled from "styled-components";
import CourseJumbo from "../components/jumbotron/CourseJumbo";
import PageHero from "../components/PageHero/PageHero";

// Icons
import NU from "../images/nu.jpg";
import Graduation from "../images/Iconly/Bulk/Graduation.svg";
import Learning from "../images/Iconly/Bulk/learning.svg";
import Camp from "../images/Iconly/Bulk/Camp.svg";
import Crit from "../images/Iconly/Bulk/Crit.svg";
import Khan from "../images/Myrzakhan.png";
import Aibol from "../images/Aibol.png";

import MainButton from "../components/buttons/MainButton";
import Testimonials from "../components/testimonials/Testimonials";
import Teachers from "../components/teachers/Teachers";
import { H3 } from "../layout/TextStyles";
import SecondaryButton from "../components/buttons/SecondaryButton";

function NufypetPage() {
  return (
    <Wrapper>
      <PageHero
        title={
          <div>
            NUFYP <br />
            Entrance Test
          </div>
        }
        description={
          <div>
            Подготовка для поступления <br />в НУ на программу <br />
            Foundation
          </div>
        }
        image={NU}
        text="Получить план подготовки"
      />
      <CourseJumbo
        mainText={
          <div>
            Комплексная <br />
            подготовка в НУ
          </div>
        }
        subText="Нашим центром ведется комплексная подготовка к сдаче данного теста, отсеивая все лишнее, обучая тому, что максимально приблизит к успешной его сдаче. "
        image={Graduation}
      />
      <CourseJumbo
        mainText={
          <div>
            Годовая программа
            <br />
            по поступлению
          </div>
        }
        subText={
          <div>
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  // color: "#e0e0e0",
                  fontWeight: 700,
                  textAlign: "left",
                  fontSize: "17px",
                }}
              >
                Годовая программа по поступлению в НУ по программе Foundation
                готовит Вас к тому, чтобы к 11-му классу уже были:
              </p>
              <ul>
                <br />
                <li>• academic IELTS с минимальными 6.0</li>
                <li>• достойный уровень английского языка</li>
                <li>• сильная база по математике</li>
                <li>
                  • пройдены порядка тысячи задач по критическому
                  мышлению/логике
                </li>
              </ul>
            </div>
            <p style={{ textAlign: "left" }}>
              <br /> Это позволит без лишнего стресса закончить 11-ый класс,
              сдать все экзамены и ЕНТ, а при поступлении уже просто повторять
              пройденный материал
            </p>
          </div>
        }
        image={Learning}
      />
      <MainButton />
      <SecondaryButton text="Получить план подготовки" />
      <Testimonials />
      <CourseJumbo
        mainText={<div>Интенсивные "Кампы"</div>}
        subText={
          <div>
            <p
              style={{
                // color: "#e0e0e0",
                fontWeight: 700,
                textAlign: "left",
                fontSize: "17px",
              }}
            >
              Нашим центром проводятся несколько раз в год интенсивные
              практикумы в формате "Камп", где ученики с утра и до вечера
              погружены в образовательную атмосферу.
            </p>
            <p style={{ textAlign: "left" }}>
              <br />
              Это позволит значительно продвинутся, а преподаватели смогу
              выявить конкретные темы, которые мешают "пробить потолок" в
              желаемых баллах.
            </p>
          </div>
        }
        image={Camp}
      />
      <MainButton />
      <SecondaryButton text="Получить план подготовки" />
      <CourseJumbo
        mainText={
          <div>
            Математика и<br />
            Критическое мышлениe
          </div>
        }
        subText={
          <div>
            <p
              style={{
                // color: "#e0e0e0",
                fontWeight: 700,
                textAlign: "left",
                fontSize: "17px",
              }}
            >
              NUFYPET состоит из двух дисциплин - математика и критическое
              мышление.
            </p>

            <p
              style={{
                textAlign: "left",
              }}
            >
              <br />
              Для успешной сдачи нужно набрать 120 баллов по этому тесту и по
              каждому предмету не менее 50-ти баллов, оттого не стоит
              расчитывать, что зная только математику - можно пройти.
            </p>
          </div>
        }
        image={Crit}
      />
      <MainButton />
      <SecondaryButton text="Получить план подготовки" />
      <TextWrapper>
        <H3>Наши преподаватели</H3>
      </TextWrapper>
      <Teachers
        name="Мырзахан"
        description="Выпусник СДУ (научная математика), 
магистрант НУ (прикладная математика) Опыт преподавания 2,5 года."
        image={Khan}
      />
      <Teachers
        name="Айбол"
        description={
          <p>
            Тренер по логике/критическому мышлению, опыт преподавания <br />
            более 5-ти лет
          </p>
        }
        image={Aibol}
      />
    </Wrapper>
  );
}

export default NufypetPage;

const Wrapper = styled.div``;

const TextWrapper = styled.div`
  margin: 100px 0 0;
`;
