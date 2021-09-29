import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import DownloadSvg from "../../svg/download.svg";

const Infographic = () => {
  return (
    <Container>
      <Content>
        <Button>
          <Link to="/">
            <span>Download The Infographic </span>
          </Link>
          <DownloadSvg />
        </Button>
      </Content>
      <ImgWrapper>
        <StaticImage
          src="../../images/infographic.jpg"
          alt=""
          placeholder="blurred"
          height={425}
          width={1000}
        />
      </ImgWrapper>
    </Container>
  );
};

export default Infographic;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 425px;
  width: 70%;
  margin: auto;
  border-radius: 4px;
`;

const Content = styled.div`
  border-radius: 4px;
  z-index: 10;
  width: 50%;
  height: 100%;
  width: 50%;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
`;

const Button = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 4px;
  display: flex;
  a {
    text-decoration: none;
  }
  &:nth-of-type(1) {
    background: #2a2a2a;
    margin-right: 35px;
  }
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    transition: 0.3s;
  }
  span {
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 16px;
    font-family: "Airbnb Cereal App bolder";
    color: #2a2a2a;
    margin-right: 12px;
  }

  svg {
    width: 23px;
    height: 26px;
  }

  @media (max-width: 600px) {
    padding: 15px 10px;
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  img {
    border-radius: 4px;
    height: 425px;
  }
`;
