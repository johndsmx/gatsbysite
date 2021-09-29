import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import bgImg from "../images/banner.jpg"

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <SubHeading>Simplify. StreamLine. Save</SubHeading>
          <Heading>Conquer Your Core Challenges</Heading>
          <SubTitle>
            Organize your jobsite and streamline project communication all in
            one place
          </SubTitle>
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
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.section``

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: -100px;
  background-image: url(${bgImg});
  background-size: cover;
  @media (max-width: 600px) {
    height: 90vh;
    background-size: 150%;
    background-position: right bottom;
    background-repeat: no-repeat;
  }
`

const Content = styled.div`
  position: absolute;
  left: 6%;
  top: 20%;
  z-index: 20;
  width: 40vw;
  @media (max-width: 1200px) {
    left: 5%;
    width: 90%;
  }
`

const Heading = styled.h1`
  font-family: "Airbnb Cereal App bolder";
  font-size: 60px;
  margin: 0;
  color: #2a2a2a;
  @media (max-width: 1200px) {
    font-size: 50px;
    text-align: center;
    margin: 20px auto;
  }
  @media (max-width: 600px) {
    line-height: 42px;
    font-size: 40px;
    text-align: left;
  }
`

const SubHeading = styled.h2`
  font-family: "Airbnb Cereal App medium";
  color: #8e8e8e;
  @media (max-width: 1200px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    text-align: left;
    font-size: 20px;
    padding-top: 20px;
  }
`

const SubTitle = styled.p`
  font-family: "Airbnb Cereal App lighter";
  font-size: 28px;
  @media (max-width: 1200px) {
    display: none;
  }
`

const Buttons = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`

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
`
