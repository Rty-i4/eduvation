import React, { Component, useEffect, useState, useRef } from "react";

import styled from "styled-components";
import Slider from "react-slick";
import Slide from "./Slide";

import { H1 } from "../../layout/TextStyles";

import Sultan from "../../images/testimonials/Sultan.png";
import Nurasyl from "../../images/testimonials/Nurasyl.png";
import Akezhan from "../../images/testimonials/Akezhan.png";
import Dana from "../../images/testimonials/Dana.png";
import Adil from "../../images/testimonials/Adil.png";
import NUCampus from "../../images/testimonials/NUCampus.png";
import NUCampus2 from "../../images/testimonials/NUCampus2.png";
import Nurdaulet from "../../images/testimonials/Nurdaulet.png";

import arrowRight from "../../images/arrow-right.svg";
import arrowLeft from "../../images/arrow-left.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <Icon src={arrowRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {" "}
      <IconLeft src={arrowLeft} />
    </div>
  );
}

// export default class Slides extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       lazyLoad: true,
//       centerMode: true,
//       // centerPadding: "50px",
//       // dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       arrows: true,

//       nextArrow: <SampleNextArrow />,
//       prevArrow: <SamplePrevArrow />,

//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             arrows: true,
//             // slidesToScroll: 3,
//             infinite: true,
//             // dots: true,
//           },
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 2,
//             arrows: true,
//             // slidesToScroll: 2,
//             // initialSlide: 2
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             arrows: true,
//             // slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//           <Slide image={Sultan} />
//           <Slide image={Dana} />
//           <Slide image={Nurasyl} />
//           <Slide image={Akezhan} />
//           <Slide image={Adil} />
//           <Slide image={NUCampus} />
//           <Slide image={NUCampus2} />
//           <Slide image={Nurdaulet} />
//         </Slider>
//       </div>
//     );
//   }
// }

function Slides({ setVideoUrl, setIsPlayer }) {
  const settings = {
    className: "center",
    lazyLoad: true,
    centerMode: true,
    // centerPadding: "50px",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true,
          // slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true,
          // slidesToScroll: 2,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: true,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePlayer = (url) => {
    setVideoUrl(url);
    setIsPlayer(true);
  };

  return (
    <Slider {...settings}>
      <Slide
        image={Sultan}
        action={() => {
          handlePlayer("https://www.youtube.com/watch?v=WYmeVd5LVVA");
          // setIsPlayer(true);
        }}
      />
      <Slide
        image={Dana}
        action={() =>
          handlePlayer("https://www.youtube.com/watch?v=xLYZb-Y3rYo")
        }
      />
      <Slide
        image={Nurasyl}
        action={() =>
          handlePlayer("https:www.youtube.com/watch?v=2-s2Pzf3cxQ&t=4s")
        }
      />
      <Slide
        image={Akezhan}
        action={() =>
          handlePlayer("https://www.youtube.com/watch?v=E-JcFGOOzaI")
        }
      />
      <Slide
        image={Adil}
        action={() => handlePlayer("https://youtu.be/ywj_n4jCDoY")}
      />
      <Slide
        image={NUCampus}
        action={() =>
          handlePlayer("https://www.youtube.com/watch?v=yf5bVxPDomQ")
        }
      />
      <Slide
        image={NUCampus2}
        action={() => handlePlayer("https://youtu.be/LdXvQDEJXHI")}
      />
      <Slide
        image={Nurdaulet}
        action={() =>
          handlePlayer("https://www.youtube.com/watch?v=C7SElX3nrjE")
        }
      />
    </Slider>
  );
}

export default Slides;

const Icon = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  z-index: 30;

  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 50%;
  margin: auto;
  padding: 10px;
  left: -16px;
  top: -20px;

  @media screen and (max-width: 450px) {
    left: -54px;
    padding: 8px;
    height: 40px;
    width: 40px;
  }
`;

const IconLeft = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  z-index: 2;

  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 50%;
  margin: auto;
  padding: 10px;
  left: -16px;
  top: -20px;

  @media screen and (max-width: 450px) {
    right: -110px;
    padding: 8px;
    height: 40px;
    width: 40px;
  }
`;
