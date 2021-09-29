import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import AnswerSection from "../components/Answer"
import Infographic from "../components/Infographic"
import { StaticImage } from "gatsby-plugin-image"
import "../css/custom.css"
// import CO from "../svg/change_orders.svg"
import Oval from "../svg/oval_contact.svg"
import DashIcon from "../svg/dashboard.svg"
import ListCheckIcon from "../svg/listCheck.svg"
import EventsIcon from "../svg/events.svg"
import CalendarIcon from "../svg/calendar.svg"
import TaskIcon from "../svg/tasks.svg"
import PhotoManageIcon from "../svg/photo_management.svg"
import Left from "../components/Left"
import { Link } from "gatsby"
import Right from "../components/Right"
const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        {/* <Bg>
          <PageTitle>Single Feature</PageTitle>
        </Bg>
        <Oval /> */}

<div class="FeatureSingleBnr">

<div class="container">

<div class="row">

<div class="col-lg-6">
<div class="FeatureSingleBnrLeftCont">

<div class="FtrBnrSub">
              <TaskIcon />
<h4>Tasks</h4>
</div>

<h1>Track and manage both general and specific project tasks</h1> 

<Buttons className="ftrSingleBnrBtns">
            <Button>
              <Link to="/">
                <span>Book a Demo</span>
              </Link>
            </Button>
            <Button>
              <Link to="/">
                <span>Contact Sales</span>
              </Link>
            </Button>
          </Buttons>

</div>
</div>

<div class="col-lg-6">

<div class="FeatureSingleBnrRightCont">

<ImgWrapper className="FtrIconWrap">
          <StaticImage
            src="https://via.placeholder.com/750x536"
            alt=""
            placeholder="blurred"
          />
          <PlayIcon className="FtrPlayIcon">
            <TriangleIcon />
          </PlayIcon>
        </ImgWrapper>

</div>

</div>

</div>

</div>

<div class="FeatrOvalShape"><Oval /></div>

</div>

        <Container>
          {/* <Content>
            <Heading>
              <span>Simplify Your Day,</span> Starting Today
            </Heading>
            <SubTitle>
              With easy to access features and a simplified onboarding process
              you and your team can dive into all that SiteMax has to offer.
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
          </Content> */}
          {/* <Left />

          <Right /> */}
        </Container>

{/* Description Image Sections */}

<section class="FtrTwoColsWrap">
<div class="container">

<div class="row">

<div class="col-lg-6">

<div class="featrSnglTwoColsCont featrSnglTwoColContLeft">

  <DashIcon/>

<h3>Full Project Task Management</h3>

<hr />

<p>An efficient way to manage and plan tasks. Easily access your task list from the palm of your hand.</p>

<ul>
  <li><span>⁃</span> Create daily simple to-do lists for projects of any size</li>
  <li><span>⁃</span> Assign tasks directly through the app and track progress</li>
  <li><span>⁃</span> Real time communication</li>
  <li><span>⁃</span> Build “look ahead” schedules with date ranges and export for key project updates</li>
</ul>

</div>

</div>

<div class="col-lg-6">

<div class="featrSnglTwoColsImgs">

<PhotoManageIcon />

</div>

</div>

</div>

<div class="row">

<div class="col-lg-6">

<div class="featrSnglTwoColsImgs featrSnglColLeftImg">

<PhotoManageIcon />

</div>

</div>

<div class="col-lg-6">

<div class="featrSnglTwoColsCont featrSnglTwoColContRight">

  <ListCheckIcon />

<h3>Make to- do lists,<br /> to-done lists</h3>

<hr />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

<ul>
  <li><span>⁃</span> Generate powerful to-do lists for projects of any size</li>
  <li><span>⁃</span> Write details and set due dates</li>
  <li><span>⁃</span> Assign project specific tasks to team members</li>
</ul>

</div>

</div>

</div>

<div class="row">

<div class="col-lg-6">

<div class="featrSnglTwoColsCont featrSnglTwoColContLeft">

  <EventsIcon />

<h3>Get More Done, <br />Together</h3>

<hr />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

<ul>
  <li><span>⁃</span> Collaborate simply but efficiently from field to office</li>
  <li><span>⁃</span> Assign task, set due-dates, and prioritize work flow</li>
  <li><span>⁃</span> Real time task tracking allows you to see what's happening at all times</li>
</ul>

</div>

</div>

<div class="col-lg-6">

<div class="featrSnglTwoColsImgs">

<PhotoManageIcon />

</div>

</div>

</div>

<div class="row">

<div class="col-lg-6">

<div class="featrSnglTwoColsImgs featrSnglColLeftImg">

<PhotoManageIcon />

</div>

</div>

<div class="col-lg-6">

<div class="featrSnglTwoColsCont featrSnglTwoColContRight">

  <CalendarIcon />

<h3>{`Look &`} <br /> {`Plan Ahead`}</h3>

<hr />

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

<ul>
  <li><span>⁃</span> Easily view tasks that are set for weeks or months ahead</li>
  <li><span>⁃</span> Build “look ahead” schedules with date ranges</li>
  <li><span>⁃</span> Export data for project updates</li>
</ul>

</div>

</div>

</div>

</div>
</section>

<AnswerSection 

AnsHdrClass={"FtrdAnsSec"}

FirstTitle={"How The SiteMax Task Feature Can Help"}

GeneralDescFirst={"Communicate and track tasks quickly with the streamlined Task feature."}

ContractorsDesc={"The Task feature enables efficient field to office communication. Easily access project information and to-do’s from the palm of your hand."}

DevelopersDesc={"Get real time visibility of all current and past project tasks to ensure compliance, productivity, and profitability."}

/>

<section class="SuccessStoriesBtn">

<div class="container">

<div class="row">

<div class="col-lg-12">

<div class="SuccessStoriesBtn text-center">

<Button>
            <Link to="/">
              <span>Success Stories </span>
            </Link>
          </Button>

</div>

</div>

</div>

</div>

</section>

<section class="FtrSingleFAQ">

<div class="container">

<div class="row">

<div class="col-lg-12">

<div class="FtrSingleFAQHead text-center">

<h2>Frequently Asked Question</h2>

</div>

</div>


<div class="col-lg-12">

<div class="FaqMainWrap">

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How does pricing work?

                  <i class="fa fa-angle-right"></i>

                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Which plan is right for me?

                  <i class="fa fa-angle-right"></i>

                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is considered a user?

                  <i class="fa fa-angle-right"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What is a collaborator?

                  <i class="fa fa-angle-right"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  What does onboarding look like?

                  <i class="fa fa-angle-right"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSix">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                 What forms of payment are accepted?

                  <i class="fa fa-angle-right"></i>
                </button>
              </h2>
            </div>
            <div
              id="collapseSix"
              class="collapse"
              aria-labelledby="headingSix"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </div>
            </div>
          </div>
         



        </div>

</div>

</div>


</div>

</div>

</section>

{/* Description Image Sections */}


   
       
        {/* </Flex> */}
        <Infographic 
        
        InfoGraphWrapClass={"FtrdInfoGraphSec"}

        />
      </Wrapper>
    </Layout>
  )
}

export default Contact

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
