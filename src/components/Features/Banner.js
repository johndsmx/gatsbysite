import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Oval from "../../svg/oval.svg";

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text>
            Whether it's timecards, RFIs, safety sheets, punch lists, or
            drawings, Sitemax is designed to ensure the tools you need are
            always at hand.
          </Text>
          <Buttons>
            <Button>
              <Link to="/">
                <span>Book a Demo</span>
              </Link>
            </Button>
            <Button>
              <Link to="/">
                <span>Watch Video</span>
              </Link>
            </Button>
          </Buttons>
        </Content>
      </Container>
      <ImgWrapper>
        <StaticImage
          src="../../images/featuresBanner.png"
          placeholder="blurred"
          height={500}
          width={800}
        />
      </ImgWrapper>
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
  background-color: #08172b;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
`;

const Content = styled.div`
  position: relative;
  padding-top: 50vh;
  z-index: 10;
`;

const Text = styled.p`
  width: 500px;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
`;

const Buttons = styled.div`
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
  padding: 15px 30px;
  border-radius: 8px;
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
    color: #000;
  }

  @media (max-width: 600px) {
    padding: 15px 10px;
  }
`;

const OvalWrapper = styled.div`
  position: absolute;
  bottom: -100px;
`;

const ImgWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -100px;
  z-index: 10;
`;
