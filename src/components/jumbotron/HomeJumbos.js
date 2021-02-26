import React from "react";

import Tick from "../../images/Iconly/Bulk/tick.svg";
import Chart from "../../images/Iconly/Bulk/Chart.svg";
import Document from "../../images/Iconly/Bulk/Document.svg";
import Users from "../../images/Iconly/Bulk/users.svg";
import Jumbotron from "./Jumbotron";
import styled from "styled-components";

function HomeJumbos() {
  return (
    <Wrapper>
      <Jumbotron
        icon={Tick}
        mainText={
          <div>
            Нацеленность на <br />
            результат
          </div>
        }
        subText="80% учеников набирают желаемый балл с первой попытки."
      />
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
        icon={Chart}
        mainText={
          <div>
            Отслеживание <br />
            прогресса
          </div>
        }
        subText="Регулярная сдача пробных тестов 
          помогает регулярно прогрессировать."
      />
      <LastJumbo>
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
  margin: 0px 0px;

  @media screen and (min-width: 768px) {
    margin: 0px 0 60px;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const LastJumbo = styled.div`
  @media screen and (min-width: 450px) {
    display: none;
  }
`;
