import React from "react"
import styled from "styled-components"
// import Oval from "../../svg/oval.svg"

const PostCard = () => {
  return (
    <Wrapper>
      {/* <OvalWrapperTop>
        <Oval />
      </OvalWrapperTop> */}
      <Container>
        <CardContainer>
          <Card>{/* <Button /> */}</Card>
        </CardContainer>
        {/* <Buttons>
          <Btn />
          <Btn />
        </Buttons> */}
      </Container>
      {/* <OvalWrapperBottom>
        <Oval />
      </OvalWrapperBottom> */}
    </Wrapper>
  )
}

export default PostCard

const Wrapper = styled.section`
  position: relative;
  margin: 200px 0 60px 0;
`
const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 60px 0;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Card = styled.div`
  width: 62%;
  height: 340px;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
`

const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  height: 53px;
  width: 100%;
  margin: 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.p};
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    transition: 0.3s;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

const Btn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  height: 53px;
  width: 240px;
  margin: 30px;
  border-radius: 4px;
  background: transparent;
  &:nth-of-type(1) {
    border: 2px solid ${({ theme }) => theme.color.p};
  }
  border: 2px solid #f4f4f4;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    transition: 0.3s;
  }
`

const OvalWrapperTop = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  z-index: -5;
`

const OvalWrapperBottom = styled(OvalWrapperTop)`
  top: unset;
  bottom: -100px;
`
