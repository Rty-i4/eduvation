import React from "react";
import styled from "styled-components";
import CourseJumbo from "../components/jumbotron/CourseJumbo";
import PageHero from "../components/PageHero/PageHero";
import london from "../images/london.jpg";

// Images
import ielts7 from "../images/ielts7.svg";

function EnglishPage() {
  return (
    <Wrapper>
      <PageHero
        title="Английский язык"
        description={
          <div>Начните говорить на иностранном языке уже через 5 недель!</div>
        }
        image={london}
      />
      <CourseJumbo
        mainText={
          <div>
            Математика и<br />
            Критическое мышлениe
          </div>
        }
        subText={
          <div>
            <p>
              NUFYPET состоит из двух дисциплин - математика и критическое
              мышление.
            </p>

            <p>
              <br />
              Для успешной сдачи нужно набрать 120 баллов по этому тесту и по
              каждому предмету не менее 50-ти баллов, оттого не стоит
              расчитывать, что зная только математику - можно пройти.
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
