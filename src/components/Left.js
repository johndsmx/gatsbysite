import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import AnswerSection from "../components/Answer"
import Infographic from "../components/Infographic"
import { StaticImage } from "gatsby-plugin-image"

import CO from "../svg/change_orders.svg"
import Oval from "../svg/oval_contact.svg"
import TaskIcon from "../svg/tasks.svg"
const Left = () => {
  return (
    <div>
      <Content>
        <Heading>
          <span>Simplify Your Day,</span> Starting Today
        </Heading>
        <SubTitle>
          With easy to access features and a simplified onboarding process you
          and your team can dive into all that SiteMax has to offer.
        </SubTitle>
        <Lists>
          <List>
            <ListIcon>
              <TaskIcon />
            </ListIcon>
            <ListDetail>
              <ListHeading>Immediate Platform Access</ListHeading>
              <ListText>
                Once you sign up receive immediate access to SiteMax.
              </ListText>
            </ListDetail>
          </List>
          <List>
            <ListIcon>
              <TaskIcon />
            </ListIcon>
            <ListDetail>
              <ListHeading>Immediate Platform Access</ListHeading>
              <ListText>
                Once you sign up receive immediate access to SiteMax.
              </ListText>
            </ListDetail>
          </List>
          <List>
            <ListIcon>
              <TaskIcon />
            </ListIcon>
            <ListDetail>
              <ListHeading>Immediate Platform Access</ListHeading>
              <ListText>
                Once you sign up receive immediate access to SiteMax.
              </ListText>
            </ListDetail>
          </List>
        </Lists>
      </Content>
    </div>
  )
}

export default Left

const Content = styled.div`
  @media (max-width: 1200px) {
    width: 90%;
  }
`
const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
const Heading = styled.h1`
  margin: 0;
  width: 365px;
  font-family: "Airbnb Cereal App bolder";
  font-size: 42px;
  color: #08172b;
  span {
    color: ${({ theme }) => theme.color.p};
  }
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 32px;
  }
`

const SubTitle = styled.p`
  width: 400px;
  font-family: "Airbnb Cereal App lighter";
  font-size: 20px;
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 18px;
  }
`

const Lists = styled.ul`
  padding-left: 36px;
  @media (max-width: 1200px) {
    padding-left: 0;
  }
`

const List = styled.li`
  display: flex;
  margin-bottom: 22px;
`

const ListIcon = styled.div`
  margin-right: 20px;
  svg {
    width: 35px;
    height: 35px;
  }
  path {
    fill: black;
  }
`

const ListDetail = styled.div`
  width: 263px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`

const ListHeading = styled.h4`
  font-family: "Airbnb Cereal App bold";
  font-size: 18px;
  margin: 5px auto;
`

const ListText = styled.p`
  font-family: "Airbnb Cereal App lighter";
  font-size: 16px;
  margin: 0;
`

const Media = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const MediaWrapper = styled.div`
  position: relative;
`

const ImgWrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 10px;
  margin: auto;
  box-shadow: 0px 2px 45px #00000026;
  border-radius: 6px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 380px;
    }
  }
`

const PlayIcon = styled.div`
  z-index: 10;
  position: absolute;
  left: 322px;
  top: 215px;
  cursor: pointer;
  width: 106px;
  height: 106px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 15px 45px #ffcc324d;
  @media (max-width: 1200px) {
    left: 38%;
    top: 145px;
  }
`

const TriangleIcon = styled.div`
  position: absolute;
  left: 45px;
  top: 40px;
  border-left: 28px solid ${({ theme }) => theme.color.p};
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
`

const Caption = styled.p`
  z-index: 10;
  width: fit-content;
  font-family: "Airbnb Cereal App bold";
  font-size: 24px;
  margin: auto;
  padding: 22px 44px;
  background-color: ${({ theme }) => theme.color.p};
  color: #2a2a2a;
  border-radius: 4px;
  margin-top: -40px;
  @media (max-width: 1200px) {
    width: 100%;
    font-size: 18px;
    padding: 13px 0px;
    text-align: center;
    margin-top: 28px;
  }
`

const MediaBackground = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
  position: absolute;
  top: 5%;
  left: 0;
  background-color: #08172b;
  width: 100%;
  height: 90%;
  z-index: -1;
`
const Wrapper = styled.div`
  > svg {
    width: 100%;
    margin-top: -100px;
  }
`

const Bg = styled.div`
  background: #f4f4f4;
  margin-top: -100px;
  padding: 100px 0 50px;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  position: relative;
  margin-top: -150px;
  margin-bottom: 100px;
`
const PageTitle = styled.h1`
  text-align: center;
  font-size: 65px;
  color: #08172b;
  line-height: 65px;
  margin: 60px 0;
`
const Form = styled.div`
  max-width: 900px;
  height: 450px;
  background: #f4f4f4;
  text-align: center;
  padding: 20px;
  margin: auto;
`

const Card = styled.div`
  background: white;
  width: 245px;
  border-radius: 6px;
  text-align: center;
  padding: 25px 15px;

  svg {
    width: 40px;
    height: 40px;
  }

  button {
    background: #e5e5e5;
    border-radius: 4px;
    border: none;
    width: 192px;
    padding: 15px;
    font-size: 16px;
    line-height: 19px;
    color: #8e8e8e;
    font-family: "Airbnb Cereal App bold";
    cursor: pointer;
  }
  p,
  h2 {
    font-family: "Airbnb Cereal App lighter";
    font-size: 28px;
    line-height: 30px;
  }

  &:hover {
    background: #08172b;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    color: #f4f4f4;
    path {
      fill: #f4f4f4;
    }
    button {
      background: ${({ theme }) => theme.color.p};
      color: #2a2a2a;
    }
  }
`
const Contactsales = styled.div`
  text-align: center;
  h2 {
    font-size: 42px;
    line-height: 44px;
    span {
      color: ${({ theme }) => theme.color.p};
    }
  }
  p {
    max-width: 552px;
    margin: auto;
    padding-bottom: 50px;
  }
  button {
    max-width: 425px;
    padding: 10px 25px;
    background: ${({ theme }) => theme.color.p};
    border: none;
    font-size: 20px;
    color: #2a2a2a;
    font-family: "Airbnb Cereal App bold";
    background: #ffcc32;
    border-radius: 4px;
    padding: 15px 0px;
    width: 400px;
    text-align: center;
    margin-top: 40px;
  }
`
