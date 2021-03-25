import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/Iconly/Bulk/logo.svg";
import { Img } from "./headerStyles";

import { Link as LinkScroll } from "react-scroll";

import { Cross as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const tooltipRef = useRef();

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      // console.log("hello")
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
    <Wrapper>
      <Link to="/">
        <Img src={logo} />
      </Link>
      <MenuDesktop count="6">
        <Link to="/ielts">
          <MenuItem title="hello">IELTS</MenuItem>
          {/* <Hr /> */}
        </Link>
        <Link to="/nufypet">
          <MenuItem title="hello">NUFYPET</MenuItem>
          {/* <Hr /> */}
        </Link>
        <Link to="/sat">
          <MenuItem title="hello">SAT</MenuItem>
          {/* <Hr /> */}
        </Link>
        <Link to="/english">
          <MenuItem title="hello">English</MenuItem>
          {/* <Hr /> */}
        </Link>
        <div style={{ cursor: "pointer" }}>
          <LinkScroll
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
          >
            <MenuItem title="hello">Контакты</MenuItem>
            {/* <Hr /> */}
          </LinkScroll>
        </div>
        <a href="https://eduvation.kz">
          <MenuItem title="hello">Онлайн-платформа</MenuItem>
        </a>
      </MenuDesktop>
      <Menu ref={ref}>
        <Hamburger rounded size={24} toggled={isOpen} toggle={setIsOpen} />
      </Menu>
      <Tooltip isOpen={isOpen} ref={tooltipRef}>
        <Link to="/ielts">
          <MenuItem title="hello">IELTS</MenuItem>
          <Hr />
        </Link>
        <Link to="/nufypet">
          <MenuItem title="hello">NUFYPET</MenuItem>
          <Hr />
        </Link>
        <Link to="/sat">
          <MenuItem title="hello">SAT</MenuItem>
          <Hr />
        </Link>
        <Link to="/english">
          <MenuItem title="hello">English</MenuItem>
          <Hr />
        </Link>
        <LinkScroll
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
        >
          <MenuItem title="hello">Контакты</MenuItem>
          <Hr />
        </LinkScroll>
        <a href="https://eduvation.kz">
          <MenuItem title="hello">Онлайн-платформа</MenuItem>
        </a>
      </Tooltip>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: auto;
  font-family: "Gilroy";
  font-weight: 600;

  @media screen and (min-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
  }
`;

const Menu = styled.div`
  position: absolute;
  display: grid;
  /* justify-self: center; */
  align-items: center;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  /* width: 48px; */
  /* height: 48px; */
  color: rgba(255, 255, 255, 0.8);
  /* background: #1e2127; */
  border-radius: 16px;
  top: 16px;
  right: 20px;
  z-index: 20;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  color: rgba(255, 255, 255, 0.7);
  /* color: black; */
  display: grid;
  grid-template-columns: auto;
  gap: ${(props) => (props.title ? "10px" : "0px")};
  align-items: center;
  padding: 8px;
  /* transition: 0.5s ease-out; */

  :hover {
    /* background: rgba(255, 255, 255, 0.1); */
    border-bottom: 2px solid rgba(255, 255, 255, 0.7);
    /* background: lightblue; */
    /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2); */
    /* border-radius: 10px; */
  }
`;

const Hr = styled.div`
  width: 170px;
  /* width: 100%; */
  height: 1px;
  background: rgb(255, 255, 255);
  opacity: 0.2;
`;
// tool tip

// const Wrapper = styled.div`
//   background: rgba(15, 14, 71, 0.3);
//   box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
//     inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(40px);

//   border-radius: 20px;
//   padding: 20px;

//   position: absolute;
//   top: 60px;
//   right: 30px;
//   z-index: 1000;
//   opacity: ${(props) => (props.isOpen ? 1 : 0)};
//   cursor: pointer;
//   z-index: 1;
//   display: grid;
//   gap: 10px;
//   grid-template-columns: 150px;
//   transition: 0.3s ease-in-out;
//   /* display: ${(props) => (props.isOpen ? "block" : "none")}; */
//   visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
//   transform: ${(props) =>
//     props.isOpen
//       ? "skewY(0deg) rotate(0deg) translateX(0px) translateY(0px)"
//       : "skewY(5deg) rotate(-5deg) translateX(30px) translateY(-20px)"};
// `;

const Tooltip = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;

  position: absolute;
  top: 64px;
  right: 30px;
  z-index: 1000;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  cursor: pointer;
  z-index: 1;
  display: grid;
  gap: 10px;
  /* grid-template-columns: 150px; */
  grid-template-columns: 170px;
  transition: 0.3s ease-in-out;
  /* display: ${(props) => (props.isOpen ? "block" : "none")}; */
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateX(0px) translateY(0px)"
      : "skewY(0deg) rotate(0deg) translateX(0px) translateY(-30px)"};

  @media screen and (max-width: 375px) {
    /* right: 20px; */
  }
`;

const MenuDesktop = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  margin-top: 34px;
  @media screen and (max-width: 768px) {
    gap: 8px;
    font-size: 15px;
  }

  @media screen and (max-width: 450px) {
    display: none;
  }
`;
