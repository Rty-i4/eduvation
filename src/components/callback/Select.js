import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import ArrowDown from "../../images/Iconly/Bulk/Arrow - Down Circle.svg";

const DropDownContainer = styled("div")`
  width: 295px;
  width: 290px;
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
  border-radius: 8px;
  height: 50px;
  border: ${(props) => (props.isError ? "2px solid red" : "2px solid #1E2127")};

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 320px) {
    width: 80vw;
    margin: 0 auto 8px;
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
  border-radius: 8px;
  box-sizing: border-box;
  width: 290px;

  font-weight: 500;
  font-size: 15px;
  color: #b1b1b1;

  &:first-child {
    padding-top: 16px;

    @media screen and (max-width: 320px) {
      padding-top: 8px;
    }
  }
  &:last-child {
    padding-bottom: 2px;
  }

  @media screen and (max-width: 320px) {
    width: 80vw;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: scroll;
    height: 170px;
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

  &:last-child {
    border-bottom: none;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 12px;
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
  setIsOpen,
}) {
  // const [selectedOption, setSelectedOption] = useState(null);

  // const onOptionClicked = (value) => () => {
  //   setSelectedOption(value);
  //   setIsOpen(false);
  //   console.log(selectedOption);
  // };
  const ref = useRef();
  const selectRef = useRef();

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !selectRef.current.contains(event.target)
    ) {
      // console.log("hello");
      // toggling();
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <Main>
    <DropDownContainer>
      <DropDownHeader
        onClick={toggling}
        selectedOption={selectedOption}
        isError={isError}
        ref={selectRef}
      >
        {selectedOption || "- Выберите филиал -"}
        <Img src={ArrowDown} />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer ref={ref}>
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
