import React from "react";
import styled from "styled-components";
import { H3 } from "../../layout/TextStyles";
import Student from "../../images/Sultan.png";
import Slides from "../slider/Slides";

function Testimonials() {
  return (
    <Wrapper>
      <H3>
        Истории наших <br />
        учеников
      </H3>
      <Stories>
        <Slides />
      </Stories>
    </Wrapper>
  );
}

export default Testimonials;

const Wrapper = styled.div`
  margin: 96px auto;
`;

const Stories = styled.div`
  /* display: grid; */
  overflow: hidden;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  margin-top: 64px;
  /* grid-template-columns: ; */
`;

const Img = styled.img`
  display: block;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 30px;
`;
