import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero/PageHero";
import library from "../images/library.jpg";

function SatPage() {
  return (
    <Wrapper>
      <PageHero
        title="SAT"
        description={
          <div>
            Сдайте SAT на 1500+ <br />
            по нашей уникальной программе
          </div>
        }
        image={library}
      />
    </Wrapper>
  );
}

export default SatPage;

const Wrapper = styled.div``;
