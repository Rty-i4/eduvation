import React, { Component } from "react";
import Slider from "react-slick";
import { H1 } from "../../layout/TextStyles";

import Student from "../../images/Sultan.png";
import styled from "styled-components";

export default class Slides extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      centerPadding: "50px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <Img src={Student} />
          <Img src={Student} />
          <Img src={Student} />
        </Slider>
      </div>
    );
  }
}

const Img = styled.img`
  margin: auto;
  padding: 16px;
`;
