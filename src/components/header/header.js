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
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  max-width: 1234px;
  margin: auto;
`;
