import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  line-height: 130%;
  color: #fff;
  @media screen and (max-width: 450px) {
    font-size: 34px;
  }
`;

export const H2 = styled.h2`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 40px;

  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 38px;
  text-align: ${(props) => (props.align ? "left" : "center")};
  line-height: 130%;
  color: #fff;
  @media screen and (max-width: 450px) {
    font-size: 24px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 38px;
  text-align: left;
  line-height: 130%;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media screen and (max-width: 450px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const BodyIntro = styled.p`
  font-family: "Gilroy";
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  text-align: ${(props) => (props.align ? "left" : "center")};
  line-height: 130%;
  @media screen and (max-width: 450px) {
    font-size: 22px;
  }

  margin: 16px 0;
`;

export const BodyMain = styled.p`
  font-family: "Gilroy";
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  font-weight: 700;
  color: #fff;
`;

export const MediumText = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 17px;
  line-height: 140%;
  color: #e0e0e0;
`;

export const MediumTextDiv = styled.div`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 17px;
  line-height: 140%;
  color: #e0e0e0;
`;

export const Caption = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #fff;
`;

export const Caption2 = styled.p`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`;

export const SmallText = styled.p`
  font-family: "Gilroy";
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  color: #e0e0e0;
  margin: 16px 0;
`;

export const SmallText2 = styled.p`
  font-family: "Gilroy";
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-family: "Gilroy";
  font-weight: 400;
  font-size: 17px;
`;

export const Desc = styled.p`
  font-family: "Gilroy";
  font-weight: 500;
  font-size: 16px;
  color: #e0e0e0;
  text-align: ${(props) => (props.align ? "left" : "center")};
  margin: 16px 0;
  line-height: 130%;
`;
