import React from "react";
import styled from "styled-components";

// Icons
import LocationIcon from "../../images/Iconly/Bulk/Location.svg";
import InstaIcon from "../../images/Iconly/Bulk/Insta.svg";
import MobileIcon from "../../images/Iconly/Bulk/Mobile.svg";

function Address({ name, address, instagram, mobile, link }) {
  return (
    <Wrapper>
      <City>{name}</City>
      <TextWrapper>
        <Icon src={LocationIcon} />

        <Text>{address}</Text>
      </TextWrapper>
      <TextWrapper>
        <Icon src={MobileIcon} />
        <Text>{mobile}</Text>
      </TextWrapper>
      <TextWrapper>
        <Icon src={InstaIcon} />
        <a href={link} target="_blank">
          <Text>{instagram}</Text>
        </a>
      </TextWrapper>
    </Wrapper>
  );
}

export default Address;

const Wrapper = styled.div`
  margin: 40px 20px;
`;

const City = styled.h3`
  color: #fff;
  /* color: #0d0d0d; */
  font-weight: 800;
  font-size: 17px;
  margin-bottom: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  /* justify-items: center; */
  align-items: center;
  margin-bottom: 16px;
`;

const Icon = styled.img`
  /* background: black;
  padding: 4px;
  border-radius: 8px; */
`;

const Text = styled.p`
  color: #e0e0e0;
  /* color: 0d0d0d; */
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;
