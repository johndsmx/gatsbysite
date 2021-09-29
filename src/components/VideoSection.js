import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const VideoSection = () => {
  return (
    <Wrapper>
      <MediaWrapper>
        <ImgWrapper>
          <StaticImage
            src="https://via.placeholder.com/858x380"
            alt=""
            placeholder="blurred"
          />
          <PlayIcon>
            <TriangleIcon />
          </PlayIcon>
        </ImgWrapper>
        <MediaBackground></MediaBackground>
      </MediaWrapper>
    </Wrapper>
  );
};

export default VideoSection;

const Wrapper = styled.section`
  margin: 120px 0;
  @media (min-width: 1200px) {
    background: transparent linear-gradient(180deg, #f4f4f4 0%, #ffffff 100%);
    background-size: auto 50%;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;

const MediaWrapper = styled.div`
  position: relative;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 10px;
  margin: auto;
  box-shadow: 0px 2px 45px #00000026;
  border-radius: 6px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 380px;
    }
  }
`;

const PlayIcon = styled.div`
  z-index: 10;
  position: absolute;
  left: 376px;
  top: 145px;
  cursor: pointer;
  width: 106px;
  height: 106px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 15px 45px #ffcc324d;
  @media (max-width: 1200px) {
    left: 36%;
  }
`;

const TriangleIcon = styled.div`
  position: absolute;
  left: 45px;
  top: 40px;
  border-left: 28px solid ${({ theme }) => theme.color.p};
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
`;

const MediaBackground = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
  position: absolute;
  top: 5%;
  left: 0;
  background-color: #08172b;
  width: 100%;
  height: 90%;
  z-index: -1;
`;
