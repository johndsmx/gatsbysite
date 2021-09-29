import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import AnswerSection from "../components/Answer"
import Infographic from "../components/Infographic"
import { StaticImage } from "gatsby-plugin-image"
import Testimonials from "../components/Testimonials"
import "../css/custom.css"
// import CO from "../svg/change_orders.svg"
import Oval from "../svg/oval_contact.svg"
import DashIcon from "../svg/dashboard.svg"
import ListCheckIcon from "../svg/listCheck.svg"
import EventsIcon from "../svg/events.svg"
import CalendarIcon from "../svg/calendar.svg"
import TaskIcon from "../svg/tasks.svg"
import PhotoManageIcon from "../svg/photo_management.svg"
import Usermultiple from "../svg/user--multiple.svg"
import Collaborate from '../svg/collaborate.svg'
import Email from "../svg/email.svg"
import Left from "../components/Left"
import { Link } from "gatsby"
import Right from "../components/Right"
const Contact = () => {
  return (
    <Layout>
      <Wrapper>
      <div class="pricing_top_section">
        <div class="container">
          <div class="pricing_banner pb-80">
              <div class="banner_content">
              <div class="row align-items-center">
                <div class="col-12 col-sm-12 col-md-5">
                  <h1 class="banner_title">Our Pricing</h1>
                  <div class="banner_desc_small">Powerful, flexible and affordable, SiteMax has created plans priced to meet you where you’re at, so you only pay for the features you need most.</div>
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
                </div>{/* column */}
                <div class="col-12 col-sm-12 col-md-6 offset-md-1">
                <div class="FeatureSingleBnrRightCont">
                  <ImgWrapper className="FtrIconWrap">
                    <StaticImage
                      src="https://via.placeholder.com/600x600"
                    />
                    <PlayIcon className="FtrPlayIcon">
                      <TriangleIcon />
                    </PlayIcon>
                  </ImgWrapper>
                </div>
                </div>{/* column */}
                </div>{/* row */}
              </div>{/* banner_content */}
            </div>{/* pricing_banner */}
            <div class="pricing_plan_section">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-8 offset-md-2 text-center">
                  <h2 class="sec-title mb-3"><span class="highlighted">Find a Plan</span> That’s Right For You.</h2>
                  <div class="plan_desc">SiteMax has a plan that’s right for everyone and will work with you to ensure you get exactly what you need from your solution – and nothing more.</div>
                </div>
              </div>{/* row */}
              <div class="pricing_tabs_wrap">
                  <div class="tabs_label_wrap pt-80 pb-80">
                      <div class="tab_label">Billed Monthly</div>
                      <div class="tab_label active">Billed Yearly (Save up to 20%)</div>
                  </div>{/* tabs_label_wrap */}
                  <div class="tabs_content_wrap">
                    <div class="tab_content">
                      <div class="price_box price_box_basic">
                          <div class="price_top_heading">Go Paperless</div>
                          <div class="price_main_heading">Basic</div>
                          <div class="price_text"><span class="highlighted">US $19</span> per user, per month (Annually)</div>
                          <ul class="price_top_details">
                            <li><Usermultiple /> 10 Users (min)</li>
                            <li><Collaborate /> Unlimited Collaborators</li>
                            <li><Email /> Knowledge Base</li>
                          </ul>
                          <div class="includes_heading">Basic Includes</div>
                          <ul class="includes_details">
                            <li>Unlimited Projects</li>
                            <li>Unlimited Storage</li>
                            <li>Task Management</li>
                            <li>Daily Reports</li>
                            <li>Safety Forms &amp; Checklists</li>
                            <li>Daily Activity Report</li>
                            <li>Form Builder</li>
                            <li>Messaging</li>
                            <li>Contacts</li>
                          </ul>
                          <a href="/" class="book_demo">Book Demo</a>
                      </div>{/* price_box */}
                    </div>{/* tab_content */}
                  </div>{/* tabs_content_wrap */}
              </div>{/* pricing_tabs_wrap */}
            </div>{/* pricing_plan_section */}
          </div>{/* container */}
        </div>{/* pricing_top_section */}


        <div class="container pt-80"><Testimonials /></div>

        <section class="FtrSingleFAQ pt-80">
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
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
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{/* faqs */}

        
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
