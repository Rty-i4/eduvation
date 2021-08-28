import React from "react";
import styled, { keyframes } from "styled-components";
import {
  Caption,
  Caption2,
  H1,
  MediumText,
  SmallText,
} from "../../layout/TextStyles";

import signupImage from "../../images/lumi/signupImage.svg";
import signupBack2 from "../../images/lumi/signupBack2.svg";
import email from "../../images/icons/email.svg";
import lock from "../../images/icons/lock.svg";

export function SignupForm(props) {
  return (
    <Wrapper
      isSign={
        // props.isSign
        false
      }
    >
      <RegImg>
        <img src={signupImage} />
      </RegImg>
      <FormWrapper>
        <H11>Create new account</H11>

        <Form>
          <MediumTextLight>
            Access to 120+ hours of courses, tutorials <br />
            and livestreams
          </MediumTextLight>
          {/* <InputContainer>
          <Img src="/images/icons/account-blue.svg" />
          <Input type="text" placeholder="Name"></Input>
        </InputContainer> */}
          <InputContainer>
            <Img src={email} />
            <Input type="email" placeholder="email"></Input>
          </InputContainer>
          <InputContainer>
            <Img src={lock} />
            <Input type="password" placeholder="password"></Input>
          </InputContainer>
        </Form>

        <Btn>
          <MediumTextLightBold>Sign In</MediumTextLightBold>
        </Btn>
        <ST style={{ paddingTop: "10px" }}>
          By clicking on Sign up, you agree to our Terms of
          <br /> service and Privacy policy.
        </ST>
        <LineSep />
        <ST>
          Don't have an account?{" "}
          <span>
            {/* <Link
              to="/"
              style={{
                color: "rgb(47, 184, 255)",
                fontWeight: "bold",
              }}
            >
              Sign up
            </Link> */}
          </span>
        </ST>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* margin-top: -305px;
  margin-left: -480px; */
  transform: translate(-50%, ${(props) => (props.isSign ? "-50%" : "-48%")});
  z-index: 2;
  /* width: 100%; */
  /* max-width: 560px; */
  /* max-width: 420px; */
  height: 610px;
  width: 960px;
  display: grid;
  /* gap: 80px; */
  justify-content: space-between;
  align-items: center;
  /* transform: translateX(-50%); */
  grid-template-columns: 360px auto;
  padding: 40px;
  transition: all 0.3s ease-in-out;

  visibility: ${(props) => (props.isSign ? "visible" : "hidden")};

  /* background: rgba(50, 61, 109, 0.5); */
  /* background: rgba(95, 109, 159, 0.8);
  box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
   */
  backdrop-filter: blur(40px);

  /* background: rgba(15, 14, 71, 0.5); */
  background: rgba(46, 56, 77, 0.8);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);

  border-radius: 20px;
  opacity: ${(props) => (props.isSign ? 1 : 0)};

  // js dleeted
  /* animation: $js was here 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s 1 normal
    forwards running; */
`;

const MediumTextLight = styled(Caption)`
  color: rgba(255, 255, 255, 0.7);
  /* color: #fff; */
  /* font-weight: bold; */
`;

const MediumTextLightBold = styled(Caption)`
  /* color: rgba(255, 255, 255, 0.7); */
  color: #fff;
  font-weight: bold;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 24px;
  left: 4px;
  z-index: 1;
  padding: 6px;
`;
const jkLqKc = keyframes`
    0% {
    transform: translateY(-100px) scale(0.8);
    opacity: 0;
}
100% {
    transform: translateY(0px) scale(1);
    opacity: 1;
}
`;

const Input = styled.input`
  font-size: 16px;
  position: relative;
  margin-top: 20px;
  width: 100%;
  /* padding: 12px 60px; */
  background: linear-gradient(
    180deg,
    rgba(99, 106, 150, 0.4) 0%,
    rgba(182, 186, 214, 0.25) 100%
  );
  /* border: 0.5px solid rgba(255, 255, 255, 0.3); */
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
    rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  box-sizing: border-box;
  padding: 10px 42px 10px 56px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: rgb(255, 255, 255);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 30px;
  border-radius: 8px;
  height: 44px;
  width: 320px;
  /* width: 100% */
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  ::placeholder {
    color: white;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    /* padding-left: 42px; */
    box-shadow: rgba(47, 184, 255, 0.3) 0px 10px 40px,
      rgb(47, 184, 255) 0px 0px 0px 1px inset;
    background: linear-gradient(
      rgba(24, 32, 79, 0.4) 0%,
      rgba(24, 32, 79, 0.25) 100%
    );
  }
`;

const H11 = styled(H1)`
  font-size: 24px;
  color: #fff;
`;

// const P1 = styled.p`
//   color: #fff;
// `

const Btn = styled.button`
  /* background: linear-gradient(
    91.4deg,
    rgb(47, 184, 255) 0%,
    rgb(158, 236, 217) 100%
  ); */
  background: linear-gradient(91.26deg, #82c132 1.96%, #42a132 100%);

  border: none;
  border-radius: 30px;
  border-radius: 8px;

  /* box-shadow: rgba(147, 231, 221, 0.2) 0px 10px 20px; */
  box-shadow: rgba(99, 178, 50, 0.25) 0px 10px 20px;
  cursor: pointer;
  display: grid;
  text-align: center;
  padding: 12px 60px;
  width: 320px;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;

  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 40px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px 0.5px inset,
      rgba(0, 0, 0, 0.1) 0px 10px 40px inset;
  }
`;

const LineSep = styled.hr`
  width: 100%;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  /* outline: none; */
`;

const ST = styled(SmallText)`
  color: #fff;
  opacity: 0.7;
`;

const RegImg = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  -webkit-box-pack: center;
  place-content: center;
  /* background-image: url(${signupBack2}); */
  background: linear-gradient(90deg, #81c251 0%, #51c2a0 100%);

  background-position: center;
  /* background: linear-gradient(200.44deg, #d1e4ff 13.57%, #ffffff 98.38%); */
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
  opacity: 1;
  animation: 1s ease 0s 1 normal forwards running jBcSpD;
`;

const Form = styled.form``;

const FormWrapper = styled.div`
  position: relative;
  margin: auto;
  justify-items: start;
  align-items: center;
  padding: 0 130px;
  margin: auto;
  width: 100%;
  /* max-width: 560px; */
  max-width: 420px;
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
