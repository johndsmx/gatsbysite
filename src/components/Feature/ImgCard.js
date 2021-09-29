import React from "react";
import styled from "styled-components";

const ImgCard = () => {
  return (
    <Container>
      <ImgWrapper></ImgWrapper>
    </Container>
  );
};

export default ImgCard;

const Container = styled.div`
  width: fit-content;
  height: 100%;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 620px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 2px 35px rgba(42, 42, 42, 0.15);
  border-radius: 6px;
  &::after {
    position: absolute;
    top: 50px;
    right: -25px;
    content: "";
    height: 400px;
    width: 25px;
    background: #08172b;
    box-shadow: 0px 2px 35px rgba(42, 42, 42, 0.15);
    border-radius: 0 6px 6px 0;
  }
`;
