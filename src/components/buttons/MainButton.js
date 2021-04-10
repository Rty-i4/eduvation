import React from "react";
import styled from "styled-components";

function MainButton({ mainAction }) {
  return (
    // <Wrapper>
    <Button onClick={mainAction}>
      <span>Записаться на пробный урок</span>
    </Button>
    // </Wrapper>
  );
}

export default MainButton;

// const Wrapper = styled.div`
//   overflow: hidden;
//   display: block;
//   width: 300px;
//   height: 44px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 24px;
//   border-radius: 30px;
// `;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: block;

  margin-top: 24px;

  width: 300px;
  height: 44px;

  background: #34435e;
  border-radius: 8px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  font-family: "Gilroy";
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  color: rgba(255, 255, 255, 0.9);

  :hover {
    cursor: pointer;
  }

  @keyframes TB {
    0% {
      // background-: 1% 0%;

      transform: translateX(-100px) skewX(-15deg);
    }
    65% {
      // background-position: 99% 100%;
      transform: translateX(-100px) skewX(-15deg);
    }
    80% {
      // background-position: 99% 100%;
      transform: translateX(300px) skewX(-15deg);
    }

    100% {
      // background-position: 1% 0%;
      transform: translateX(300px) skewX(-15deg);
      /* transition: 0s; */
    }
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.1),
      hsla(0, 0%, 100%, 0.6) 100%
    );
    width: 45px;
    height: 100%;
    top: 0;
    // filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
    animation: TB 5s linear infinite;
    // transition: 0.7s;
  }

  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  @media screen and (max-width: 450px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
