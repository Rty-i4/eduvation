import React from "react";
import styled from "styled-components";

import CloseBtn from "../../images/CloseButton.svg";

function QuizCloseButton({ handleQuiz }) {
  return (
    <CloseButton onClick={handleQuiz}>
      <img src={CloseBtn} />
    </CloseButton>
  );
}

export default QuizCloseButton;

const CloseButton = styled.div`
  position: absolute;
  /* float: right; */
  z-index: 10;
  right: 8px;
  top: -20px;
  width: 36px;
  height: 36px;
`;
