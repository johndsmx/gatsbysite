import React from "react"
import styled from "styled-components"
import PunchLists from "../svg/punch_lists.svg"
import { Link } from "gatsby"

const Toprow = () => {
  return (
    <Wrapper>
      <Container>
        <Item>
          <PunchLists />
          <Link to="/">Login</Link>
        </Item>

        <Item>
          <PunchLists />
          <Link to="/">Support</Link>
        </Item>

        <Item>
          <PunchLists />
          <Link to="/">Contact Sales</Link>
        </Item>
      </Container>
    </Wrapper>
  )
}

export default Toprow

const Wrapper = styled.section`
  position: relative;
  z-index: 99;
  background: #08172b;
  padding: 5px;
`

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 80px 80px 140px;
  justify-content: end;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    padding: 10px 25px;
    font-family: "Airbnb Cereal App bold";
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #cccccc;
    text-decoration: none;
    font-weight: bold;
    font-size: 12px;
    padding: 0 0 0 10px;
  }
  path {
    fill: ${({ theme }) => theme.color.p};
  }
`
