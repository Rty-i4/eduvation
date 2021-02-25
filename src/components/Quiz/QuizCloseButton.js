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
  z-index: 4;
  right: 20px;
  top: 20px;
  width: 36px;
  height: 36px;
`;
