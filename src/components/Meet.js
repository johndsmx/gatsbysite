import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Meet = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Heading>
            <span>We Meet You</span>
            <br />
            Where You’re At
          </Heading>
          <SubTitle>Our plans are purpose-built to give you what you need no matter where you are in your construction management journey.</SubTitle>
          <Link to="/">Learn More -&gt;</Link>
        </Content>
        <Cards>
          <Card>
            <CardContent>
              <CardHeading>Go Paperless</CardHeading>
              <Link to="/">Learn More</Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardHeading>Consolidate Apps</CardHeading>
              <Link to="/">Learn More</Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardHeading>Streamline Construction Management</CardHeading>
              <Link to="/">Learn More</Link>
            </CardContent>
          </Card>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default Meet;

const Wrapper = styled.section`
  margin: 60px 0;
  padding: 0px 15px;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 30%;
  padding-right: 20px;
  a {
    text-decoration: none;
    color: #2a2a2a;
    font-weight: bold;
    font-size: 20px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    a {
      font-size: 18px;
    }
    padding-right: 20px;
    margin-bottom: 32px;
  }
`;

const Heading = styled.h1`
  font-family: "Airbnb Cereal App bolder";
  font-size: 42px;
  color: #08172b;
  span {
    color: ${({ theme }) => theme.color.p};
  }
  @media (max-width: 1200px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  font-family: "Airbnb Cereal App lighter";
  font-size: 20px;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1200px) {
    overflow: scroll;
    width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #e5e5e5;
  height: 375px;
  width: 30%;
  border-radius: 6px;
  @media (max-width: 1200px) {
    min-width: 225px;
    &:nth-of-type(2) {
      margin: 0px 12px;
    }
  }
`;

const CardContent = styled.div`
  position: absolute;
  left: 20px;
  bottom: 16px;
  max-width: 134px;
  a {
    text-decoration: none;
    color: #2a2a2a;
    font-weight: bold;
    font-size: 20px;
  }

  @media (max-width: 1200px) {
    left: 15px;
    bottom: 10px;
  }
`;

const CardHeading = styled.h2`
  font-family: "Airbnb Cereal App bolder";
  color: #2a2a2a;
  font-size: 28px;
  margin: 5px 0;
  line-height: 2rem;
`;
