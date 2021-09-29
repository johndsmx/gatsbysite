import React from "react";
import styled from "styled-components";
import Equipment from "../svg/equipment.svg";
import Calibrate from "../svg/calibrate.svg";
import Baggage from "../svg/baggage-claim.svg";

const AnswerSection = props => {
  return (
    <Wrapper>
      <Container>
        <Header className={props.AnsHdrClass}>
          <Heading>{props.FirstTitle}</Heading>
          <SubTitle>{props.FirstSubTitle}</SubTitle>
        </Header>
        <Cards>
          <Card>
            <CardMedia>
              <Equipment />
            </CardMedia>
            <CardContent>
              <h2>General Contractors</h2>
              <SubHeading>{props.FirstSubHeading}</SubHeading>
              <CardText>
                <p>
                {props.GeneralDescFirst}
                </p>
                <p> {props.GeneralDescSecond}</p>
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardMedia>
              <Calibrate />
            </CardMedia>
            <CardContent>
              <h2>
                Sub <br /> Contractors
              </h2>
              <SubHeading>{props.SecondSubHeading}</SubHeading>
              <CardText>
                <p>
                {props.ContractorsDesc}
                </p>
              </CardText>
            </CardContent>
          </Card>
          <Card>
            <CardMedia>
              <Baggage />
            </CardMedia>
            <CardContent>
              <h2>Developers Owners</h2>
              <SubHeading>{props.ThirdSubHeading}</SubHeading>
              <CardText>
                <p>
                {props.DevelopersDesc}
                </p>
              </CardText>
            </CardContent>
          </Card>
        </Cards>
      </Container>
    </Wrapper>
  );
};

export default AnswerSection;

const Wrapper = styled.section`
  margin: 60px auto;
  path,
  div {
    transition: 0.3s;
  }
`;

const Container = styled.div``;

const Header = styled.div`
  max-width: 700px;
  margin: 40px auto;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Heading = styled.h1`
  font-family: "Airbnb Cereal App bolder";
  font-size: 65px;
  line-height: 65px;
  margin: 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 45px;
    line-height: 42px;
  }
`;

const SubTitle = styled.p`
  font-family: "Airbnb Cereal App lighter";
  text-align: center;
  max-width: 500px;
  margin: 30px auto;
  color: #2a2a2a;
  font-size: 20px;
  @media (max-width: 1200px) {
    font-size: 18px;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  padding: 20px;
  width: 25%;
  display: flex;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.s};
  border: 2px solid ${({ theme }) => theme.color.s};
  transition: 0.3s;

  path {
    fill: rgb(256 256 256 / 60%);
  }
  &:hover {
    border-color: ${({ theme }) => theme.color.p};
    background-color: #fff;
    > div:nth-of-type(1) {
      background-color: ${({ theme }) => theme.color.p};
    }
    path {
      fill: #000000;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 80%;
    border: 2px solid ${({ theme }) => theme.color.p};
    background-color: #fff;
    &:nth-of-type(1) {
      border-radius: 8px 8px 0px 0px;
      border-width: 2px 2px 0 2px;
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
    &:nth-of-type(2) {
      border-radius: 0px;
      border-width: 0px 2px;
      box-shadow: 2px 10px 10px rgba(33, 33, 33, 0.2);
    }
    &:nth-of-type(3) {
      border-radius: 0px 0px 8px 8px;
      border-width: 0px 2px 2px 2px;
      box-shadow: 0px 11px 10px rgba(33, 33, 33, 0.2);
    }
  }
`;

const CardMedia = styled.div`
  padding: 10px;
  height: fit-content;
  width: fit-content;
  background-color: #000000;
  border-radius: 50%;
  svg {
    width: 32px;
    height: 32px;
  }
  @media (max-width: 1200px) {
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(33, 33, 33, 0.2);
  }
`;

const CardContent = styled.div`
  padding: 0 10px;
  h2 {
    font-size: 36px;
    margin: 0;
    font-family: "Airbnb Cereal App bolder";
  }
`;

const SubHeading = styled.p`
  margin: 0;
  font-size: 18px;
  max-width: 200px;
  line-height: 26px;
`;

const CardText = styled.div`
  font-family: "Airbnb Cereal App lighter";
  font-size: 16px;
  line-height: 26px;
`;
