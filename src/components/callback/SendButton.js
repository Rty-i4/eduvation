import React from "react";
import styled from "styled-components";

function SendButton({ text, action }) {
  return <Button onClick={action}>{text || "Отправить"}</Button>;
}

export default SendButton;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;

  width: 180px;
  height: 50px;

  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
  border-radius: 30px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  font-family: "Gilroy";
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(107, 182, 50, 0.3);
  :hover {
    cursor: pointer;
  }
`;
