import React, { useState } from "react";
import styled from "styled-components";

import ArrowDown from "../../images/Iconly/Bulk/Arrow - Down Circle.svg";

const DropDownContainer = styled("div")`
  width: 295px;
  margin: 20px auto;
`;

const DropDownHeader = styled("div")`
  position: relative;
  margin-bottom: 8px;
  padding: 16px 24px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 17px;
  ${(props) => (props.title ? "10px" : "0px")};
  color: ${(props) => (props.selectedOption ? "#4f4f4f" : "#b1b1b1")};
  background: #ffffff;
  border-radius: 16px;
  height: 50px;
  border: ${(props) => (props.isError ? "2px solid red" : "none")};

  :hover {
    cursor: pointer;
  }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  z-index: 2;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: #ffffff;
  /* border: 2px solid #e5e5e5; */
  border-radius: 16px;
  box-sizing: border-box;
  width: 295px;

  font-weight: 500;
  font-size: 15px;
  color: #b1b1b1;

  &:first-child {
    padding-top: 16px;
  }
  &:last-child {
    padding-bottom: 2px;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 16px;
  padding: 8px 8px 8px 0;
  border-bottom: 1px solid #e0e0e0;
  /* margin-right: 24px; */
  :hover {
    color: #4f4f4f;
    cursor: pointer;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 1;
`;

const options = ["Nur-Sultan", "Almaty", "Atyrau", "Aktobe"];

export default function App({
  selectedOption,
  handleSelect,
  toggling,
  isOpen,
  isError,
}) {
  // const [selectedOption, setSelectedOption] = useState(null);

  // const onOptionClicked = (value) => () => {
  //   setSelectedOption(value);
  //   setIsOpen(false);
  //   console.log(selectedOption);
  // };

  return (
    // <Main>
    <DropDownContainer>
      <DropDownHeader
        onClick={toggling}
        selectedOption={selectedOption}
        isError={isError}
      >
        {selectedOption || "- Выберите филиал -"}
        <Img src={ArrowDown} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={handleSelect(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
    // </Main>
  );
}
