import React from "react";
import styled from "styled-components";
import CourseCard from "./CourseCard";

// images
import NU from "../../images/nu.jpg";
import Library from "../../images/library.jpg";
import Cambridge from "../../images/cambridge.jpg";
import London from "../../images/london.jpg";

function Courses() {
  return (
    <Wrapper>
      <CourseCard
        img={NU}
        title="NUFYPET"
        subtitle="Critical Thinking & Math"
        page="/nufypet"
      />
      <CourseCard
        img={Cambridge}
        title="IELTS"
        subtitle="Academic and General"
        page="/ielts"
      />
      <CourseCard img={Library} title="SAT" subtitle="Reasoning" page="/sat" />
      <CourseCard
        img={London}
        title="ENGLISH"
        subtitle="General and Pre-IELTS"
        page="/english"
      />
    </Wrapper>
  );
}

export default Courses;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  row-gap: 50px;
`;
