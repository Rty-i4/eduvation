import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

import CloseVideoButton from "./CloseVideoButton";

import styled from "styled-components";
import { H3 } from "../../layout/TextStyles";
import Student from "../../images/Sultan.png";
import Slides from "../slider/Slides";

function Testimonials() {
  const [isPlayer, setIsPlayer] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=WYmeVd5LVVA"
  );

  // const handleUrl = (url) => {
  //   setVideoUrl(url);
  // };
  const iconRef = useRef();
  const playerRef = useRef();

  function handleClickOutside(event) {
    if (
      iconRef.current &&
      !iconRef.current.contains(event.target) &&
      !playerRef.current.contains(event.target)
    ) {
      setIsPlayer(false);
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
      <H3>
        Истории наших <br />
        учеников
      </H3>
      {isPlayer ? (
        <Overlay isPlayer={isPlayer}>
          <PlayerWrapper ref={playerRef}>
            <div ref={iconRef}>
              <CloseVideoButton action={() => setIsPlayer(false)} />
            </div>

            <ReactPlayer
              // style={{ position: "absolute", top: 0, left: 0 }}
              className="react-player"
              url={videoUrl}
              width="100%"
              height="70%"
              playing={isPlayer}
              controls={true}
            />
          </PlayerWrapper>
        </Overlay>
      ) : null}
      <Stories

      // onClick={() => setIsPlayer(true)}
      >
        <Slides setVideoUrl={setVideoUrl} setIsPlayer={setIsPlayer} />
      </Stories>
    </Wrapper>
  );
}

export default Testimonials;

const Wrapper = styled.div`
  margin: 96px auto;
  /* width: 30%; */
  /* height: 400px; */
`;

const Stories = styled.div`
  /* display: grid; */
  overflow: visible;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  margin: 64px auto 0;
  max-width: 1020px;

  @media screen and (max-width: 1024px) {
    max-width: 85%;
  }

  @media screen and (max-width: 768px) {
    max-width: 85%;
  }

  @media screen and (max-width: 450px) {
    max-width: 100%;
    overflow: hidden;
  }

  /* grid-template-columns: ; */
`;

const PlayerWrapper = styled.div`
  position: relative;
  display: block;
  margin: auto auto;
  /* padding-top: 56.25%; */
  padding-top: 50%;

  width: 1000px;
  height: 800px;
  /* height: 100%; */
  border-radius: 16px;
  /* overflow: hidden; */
  @media screen and (max-width: 768px) {
    width: 100%;

    height: 70%;
  }

  @media screen and (max-width: 450px) {
    width: 100%;

    height: 50%;
    margin-top: 20%;
  }
  /* background: #fff; */
`;

const Overlay = styled.div`
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px) saturate(100%);

  visibility: ${(props) => (props.isPlayer ? "visible" : "hidden")};
`;
