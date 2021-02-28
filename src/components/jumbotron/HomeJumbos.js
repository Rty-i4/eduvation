import React from "react";

import Tick from "../../images/Iconly/Bulk/tick.svg";
import Chart from "../../images/Iconly/Bulk/Chart.svg";
import Document from "../../images/Iconly/Bulk/Document.svg";
import Users from "../../images/Iconly/Bulk/users.svg";
import Jumbotron from "./Jumbotron";
import styled from "styled-components";

function HomeJumbos({ first }) {
  return (
    <Wrapper>
      <FirstJumbo first={first}>
        <Jumbotron
          icon={Tick}
          mainText={
            <div>
              Нацеленность на <br />
              результат
            </div>
          }
          subText="80% учеников набирают желаемый балл с первой попытки"
        />
        <Jumbotron
          icon={Chart}
          mainText={
            <div>
              Отслеживание <br />
              прогресса
            </div>
          }
          subText="Следим за прогрессом учеников через регулярные сдачи пробных тестов 
          что помогает выявлять сильные и слабые стороны которые нужно развивать"
        />
      </FirstJumbo>
      <LastJumbo first={first}>
        <Jumbotron
          icon={Document}
          mainText={
            <div>
              Проверенные <br />
              материалы
            </div>
          }
          subText="Материалы для подготовки собраны 
          из проверенных источников"
        />

        <Jumbotron
          icon={Users}
          mainText={
            <div>
              Опытные <br />
              преподаватели
            </div>
          }
          subText="Опыт преподавателей которые подготовят вас к тому что на самом деле нужно"
        />
      </LastJumbo>
    </Wrapper>
  );
}

export default HomeJumbos;

const Wrapper = styled.div`
  margin: auto;

  @media screen and (min-width: 768px) {
    /* margin: 0px 0 60px; */
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
const FirstJumbo = styled.div`
  @media screen and (min-width: 450px) {
    display: ${(props) => (props.first ? "block" : "none")};
  }
`;
const LastJumbo = styled.div`
  @media screen and (min-width: 450px) {
    display: ${(props) => (props.first ? "none" : "block")};
  }
`;
