import React from "react";
import styled from "styled-components";
import ImgCard from "./ImgCard";
import Dashboard from "../../svg/dashboard.svg";
import ListCheck from "../../svg/listCheck.svg";
import Events from "../../svg/events.svg";
import Calendar from "../../svg/calendar.svg";

const ImgCards = () => {
  return (
    <Wrapper>
      <Container>
        <Card>
          <Content>
            <Dashboard />
            <Border />
          </Content>
          <ImgCard />
        </Card>

        <Card>
          <ImgCard />
          <Content>
            <ListCheck />
            <Border />
          </Content>
        </Card>

        <Card>
          <Content>
            <Events />
            <Border />
          </Content>
          <ImgCard />
        </Card>

        <Card>
          <ImgCard />
          <Content>
            <Calendar />
            <Border />
          </Content>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default ImgCards;

const Wrapper = styled.section`
  margin: 280px 0 100px 0;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 86px;
`;

const Content = styled.div`
  height: 100%;
  width: 45%;
`;

const Border = styled.div`
  width: 100px;
  margin-top: 150px;
  border-bottom: 5px solid ${({ theme }) => theme.color.p};
`;
