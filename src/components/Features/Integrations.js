import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Infographic from "./Infographic.js";
import Icon from "../../svg/tools.svg";

const Integrations = () => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Content>
            <p>
              We understand you might have some great systems in place, so we’ve
              made sure that our tools are compatible with yours.
            </p>
            <Link to="/">Learn More -&gt;</Link>
          </Content>
        </Card>
        <Infographic />
      </Container>
    </Wrapper>
  );
};

export default Integrations;

const Wrapper = styled.section`
  margin: 150px 0 -180px 0;
`;

const Container = styled.div`
  position: relative;
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 425px;
  height: 425px;
  margin-right: 60px;
  background-color: ${({ theme }) => theme.color.p};
  border-radius: 4px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 40px;
  top: 40px;
`;

const Content = styled.div`
  height: 182px;
  width: 280px;
  margin-top: 150px;
  padding: 40px 67px 27px 40px;
  font-size: 20px;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
