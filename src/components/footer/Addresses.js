import React from "react";
import styled from "styled-components";
import { H3 } from "../../layout/TextStyles";

// Images
import karta from "../../images/karta.svg";
import Address from "./Address";
import Callback from "../callback/Callback";

function Addresses() {
  const cities = [
    {
      name: "NUR-SULTAN",
      address: "Кошкарбаева 10/1, этаж D6",
      mobile: "+7 (707) 900 19 23",
      instagram: "eduvation.kz",
    },
    {
      name: "ALMATY",
      address: "4 Микро-район, 74 А, 1 этаж",
      mobile: "+7 (777) 831 74 48",
      instagram: "oxford_vision",
    },
    {
      name: "ATYRAU",
      address: "Азаттык 26 Б",
      mobile: "+7 (775) 688 01 30",
      instagram: "amityacademy",
    },
    {
      name: "AKTOBE",
      address: "Жубанова 298 Б, 1 этаж",
      mobile: "+7 (707) 770 25 77",
      instagram: "oxfordvision_aktobe",
    },
  ];
  return (
    <div>
      <Callback />
      <Wrapper>
        <Title>
          <H3>Мы в 4 городах</H3>
        </Title>
        <Img src={karta} />
        <EndWrapper>
          {cities.map((city, index) => (
            <Address
              name={city.name}
              address={city.address}
              instagram={city.instagram}
              mobile={city.mobile}
              key={index}
            />
          ))}
        </EndWrapper>
      </Wrapper>
    </div>
  );
}

export default Addresses;

const Wrapper = styled.div`
  margin-top: 80px;
  background-color: #1e2127;
  /* background-color: #0d0d0d; */
  /* background-color: darkgreen; */
  /* background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%); */
  padding: 0px 0 40px;
`;

const EndWrapper = styled.div`
  background-color: #1e2127;
  /* background-color: 0d0d0d; */
  padding: 20px 0;
`;

const Img = styled.img`
  display: block;
  margin: 64px auto;
`;

const Title = styled.div`
  padding: 40px 0;
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);
`;
