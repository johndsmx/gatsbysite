import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import DownloadSvg from "../svg/download.svg";

const Infographic = props => {
  return (
    <Wrapper className={props.InfoGraphWrapClass}>
      <Container>
        <Content>
          <Heading>
            <span>See How the Right Construction Management Software </span>
            Can Improve Effeciency, Accuracy and Visibility
          </Heading>
          <Button>
            <Link to="/">
              <span>Download The Infographic </span>
            </Link>
            <DownloadSvg />
          </Button>
        </Content>
        <ImgWrapper>
          <StaticImage
            src="../images/infographic.jpg"
            alt=""
            placeholder="blurred"
            height={378}
            width={1000}
          />
        </ImgWrapper>
      </Container>
    </Wrapper>
  );
};

export default Infographic;

const Wrapper = styled.section`
  margin: 60px 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  height: 378px;
  margin: auto;
  border-radius: 4px;
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  padding: 60px 0px 0px 45px;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
`;

const Heading = styled.h1`
  font-size: 38px;
  font-family: "Airbnb Cereal App bolder";
  color: #08172b;
  line-height: 44px;
  margin-top: 0;
  span {
    color: ${({ theme }) => theme.color.p};
  }
`;

const Button = styled.button`
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
    background: ${({ theme }) => theme.color.p};
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
`;
