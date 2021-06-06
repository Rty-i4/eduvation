import React from "react";
import styled from "styled-components";

function SecondaryButton({ text, action }) {
  return (
    <Button onClick={action}>
      {text || "Узнать свой уровень английского"}
    </Button>
  );
}

export default SecondaryButton;

const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: block;
  margin-top: 24px;

  width: 300px;
  height: 44px;

  /* background: #34435e; */
  background: transparent;
  /* border-radius: 30px; */
  border-radius: 8px;
  border: 2px solid green;
  border: 2px solid white;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  font-family: "Gilroy";
  color: rgba(255, 255, 255, 0.9);

  :hover {
    cursor: pointer;
    color: lightgreen;
  }

  @media screen and (max-width: 450px) {
    /* margin-left: auto;
    margin-right: auto; */
  }
  /* @keyframes TransitioningBackground {
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
      transition: 0s;
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
    animation: TransitioningBackground 5s linear infinite;
    // transition: 0.7s;
  } */
`;
