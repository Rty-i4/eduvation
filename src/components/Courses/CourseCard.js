import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowRight from "../../images/Iconly/Bulk/ArrowRight.svg";

function CourseCard({ img, title, subtitle, page }) {
  return (
    <Link to={page}>
      <Wrapper>
        <Wallpaper>
          <Img src={img} />
        </Wallpaper>
        <Card>
          <Description>{subtitle}</Description>
          <Title>{title}</Title>
          <LearnMore>
            <span>Подробнее</span>
            <IconDown src={ArrowRight} />
          </LearnMore>
        </Card>
      </Wrapper>
    </Link>
  );
}

export default CourseCard;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 128px auto;
  width: 335px;
  background: #1e2127;
  height: 128px;

  margin: 10px auto 20px;
  border-radius: 16px;
  overflow: hidden;

  :hover {
    cursor: pointer;
  }
`;

const Wallpaper = styled.div`
  overflow: hidden;
  object-fit: cover;
`;

const Card = styled.div`
  background: #1e2127;
  display: grid;
  margin: 24px 16px 8px;
`;

const Img = styled.img`
  height: 128px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const Description = styled.p`
  font-size: 13px;
  /* color: #c2c7cf; */
  color: #a3a3a3;
  font-weight: 600;
`;

const Title = styled.h4`
  font-weight: 600;
  color: #fff;
`;

const LearnMore = styled.div`
  color: lightgreen;
  color: green;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  justify-content: end;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  span {
    background: linear-gradient(135deg, #9eec73 0%, #b1f8f3 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const IconDown = styled.img``;
