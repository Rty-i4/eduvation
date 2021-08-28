import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { H1 } from "../layout/TextStyles";

import NotFound from "../images/404.svg";

function NotFoundPage() {
  return (
    <Wrapper>
      <H1>Page not found</H1>
      <Img src={NotFound} />
      <Link to="/">
        <Button>На главную</Button>
      </Link>
    </Wrapper>
  );
}

export default NotFoundPage;

const Wrapper = styled.div`
  margin: auto;
  padding-top: 50px;
  height: 85vh;
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
`;

const Button = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 200px;
  border-radius: 4px;
  text-align: center;
  color: white;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%); ;
`;
