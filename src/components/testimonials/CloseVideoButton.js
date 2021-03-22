import React from "react";
import styled from "styled-components";

import CloseBtn from "../../images/CloseButton.svg";

function CloseVideoButton({ action }) {
  return (
    <CloseButton onClick={action}>
      <img src={CloseBtn} />
    </CloseButton>
  );
}

export default CloseVideoButton;

const CloseButton = styled.div`
  position: absolute;
  /* float: right; */
  z-index: 10;
  right: 8px;
  top: 30px;
  width: 36px;
  height: 36px;

  @media screen and (max-width: 768px) {
    top: 16px;
  }
`;
