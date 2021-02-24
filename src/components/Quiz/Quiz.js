// import React, { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import styled from "styled-components";

// import Student from "../../images/Sultan.png";

// export default function Quiz() {
//   const [state, setState] = useState({
//     nav1: null,
//     activeSlide: 0,
//     activeSlide2: 0,
//   });
//   const slider1 = useRef();
//   const { nav1 } = state;
//   const next = () => {
//     slider1.current.slickNext();
//   };
//   const previous = () => {
//     slider1.current.slickPrev();
//   };

//   useEffect(() => {
//     setState({
//       nav1: slider1.current,
//     });
//   }, []);
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => this.setState({ activeSlide: next }),
//     afterChange: (current) => this.setState({ activeSlide2: current }),
//   };
//   const slides = [
//     { img: { Student } },
//     { img: { Student } },
//     { img: { Student } },
//   ];
//   return (
//     <div>
//       <div style={{ color: "#fff", margin: "20px", fontWeight: 700 }}>
//         <p>
//           BeforeChange => activeSlide:
//           <strong>{state.activeSlide}</strong>
//         </p>
//         <p>
//           AfterChange => activeSlide:
//           <strong>{state.activeSlide2}</strong>
//         </p>
//       </div>
//       <Slider
//         asNavFor={nav1}
//         ref={(slider) => (slider1.current = slider)}
//         {...settings}
//       >
//         {slides.map((slide, index) => (
//           <Img
//             src={Student}
//             key={index}
//             //   visible={this.state.activeSlide === index ? true : false}
//           />
//         ))}
//       </Slider>
//     </div>
//   );
// }

// const Img = styled.img`
//   margin: auto;
//   /* display: block;
// margin-left: 16px;
// margin-right: 16px;
// margin-top: 30px; */
//   padding: 0 16px;
//   /* opacity: ${(props) => (props.visible ? "1" : "0")}; */

//   transition: 0.3s ease-in;
// `;
