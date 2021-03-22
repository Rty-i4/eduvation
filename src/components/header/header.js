import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/Iconly/Bulk/logo.svg";
import { Img } from "./headerStyles";

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Img src={logo} />
      </Link>
      <Menu></Menu>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: auto;
`;

const Menu = styled.div`
  position: fixed;
  display: grid;
  /* justify-self: center; */
  align-items: center;
  width: 44px;
  height: 44px;
  /* color: #1e2127; */
  background: #1e2127;
  border-radius: 16px;
  top: 20px;
  right: 20px;
  z-index: 20;
`;
