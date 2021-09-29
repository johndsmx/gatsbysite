import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Oval from "../../svg/oval.svg";

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Buttons>
          <Button>
            <Link to="/"></Link>
          </Button>
          <Button>
            <Link to="/"></Link>
          </Button>
        </Buttons>
        <MediaWrapper>
          <ImgWrapper>
            <StaticImage
              src="https://via.placeholder.com/620x535"
              alt=""
              placeholder="blurred"
            />
            <PlayIcon>
              <TriangleIcon />
            </PlayIcon>
          </ImgWrapper>
        </MediaWrapper>
      </Container>
      <OvalWrapper>
        <Oval />
      </OvalWrapper>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;
  margin-top: -100px;
  background-color: ${({ theme }) => theme.color.p};
`;

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  margin: auto;
  height: 100%;
`;
const Buttons = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  bottom: 50px;
  display: flex;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  height: 53px;
  width: 192px;
  border-radius: 4px;
  &:nth-of-type(1) {
    background: #08172b;
    margin-right: 35px;
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    transition: 0.3s;
  }
`;

const OvalWrapper = styled.div`
  position: absolute;
  bottom: -100px;
  svg {
    g {
      fill: ${({ theme }) => theme.color.p};
    }
  }
`;

const MediaWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -200px;
  z-index: 10;
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
  left: 280px;
  top: 215px;
  cursor: pointer;
  width: 106px;
  height: 106px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 15px 45px #ffcc324d;
  @media (max-width: 1200px) {
    left: 38%;
    top: 145px;
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
