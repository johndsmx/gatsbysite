import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
// import CO from "../svg/change_orders.svg";
import Companies from "../components/Companies"
import Currncy from "../svg/currency-icon.svg"
import Testimonials from "../components/Testimonials"
import Oval from "../svg/oval_contact.svg"
import { StaticImage } from "gatsby-plugin-image"
import Calibrate from "../svg/calibrate.svg"
import ScaleIcon from "../svg/scale-icon.svg"
import BookDemoIconOne from "../svg/BookdemoIconOne.svg"
import BookDemoIconTwo from "../svg/BookdemoIconTwo.svg"
import BookDemoIconThree from "../svg/BookdemoIconThree.svg"

const bookDemo = () => {
  return (
    <Layout>
      <Wrapper>
        <Bg className="BookDemoBnr">
          <PageTitle className="BookDemoBnrHdng">
            {"See What SiteMax Can"} <br />
            {"Do for You And Your"}
            <br /> {"Team & Business"}
          </PageTitle>
        </Bg>
        <Oval className="BookDemoOval" />
        {/* <Contactsales>
          <h2>
            <span>Contact</span> Sales
          </h2>
          <p className="para">
            To email Sales, please fill out the form below. A team member will
            contact you within one business day.
          </p>
          <Form />
          <button>Get In Touch</button>
        </Contactsales> */}

        <section class="BookDemoFormSecWrap">
          <div class="container bookDemo-sm-container">
            <div class="row">
              <div class="col-lg-6">
                <div class="bookDemoFormSecLeft">
                  <h2>
                    <span>
                      Simple, streamlined and purpose-built for construction,
                    </span>{" "}
                    SiteMax puts success at your fingertips
                  </h2>

                  <h5>
                    Schedule a call with one of our SiteMax product experts to
                    take you through our purpose-driven features.
                  </h5>

                  <p>Takeaways from the meeting:</p>

                  <ul>
                    <li>
                      <span>⁃</span> Learn which features your business needs
                      and which you don't
                    </li>
                    <li>
                      <span>⁃</span> How SiteMax can address your current pain
                      points
                    </li>
                    <li>
                      <span>⁃</span> General structure and layout of the SiteMax
                      app
                    </li>
                    <li>
                      <span>⁃</span> Breakdown of our pricing plan structure
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="bookDemoFormSecRight">
                  <h4>Demo Request</h4>

                  <form class="BookDemoForm">
                    <div class="form-group">
                      <label for="fname">First Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name*"
                        id="fname"
                      />
                    </div>
                    <div class="form-group">
                      <label for="fname">Last Name*</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last Name*"
                        id="lname"
                      />
                    </div>
                    <div class="form-group">
                      <label for="email">Email Address*</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address*"
                        id="email"
                      />
                    </div>
                    <div class="form-row">
                      <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label for="phn">Phone Number*</label>
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Phone Number*"
                          id="phn"
                        />
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label for="sel1">Country*</label>
                        <select class="form-control" id="sel1">
                          <option select hidden>
                            Select One
                          </option>
                          <option>Select One</option>
                          <option>Select Two</option>
                          <option>Select Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label for="sel2">Type of Company*</label>
                        <select class="form-control" id="sel2">
                          <option select hidden>
                            Select One
                          </option>
                          <option>Select One</option>
                          <option>Select Two</option>
                          <option>Select Three</option>
                        </select>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label for="sel3">How did you hear about us?</label>
                        <select class="form-control" id="sel3">
                          <option select hidden>
                            Select One
                          </option>
                          <option>Select One</option>
                          <option>Select Two</option>
                          <option>Select Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" />{" "}
                        Subscribe me to SiteMax News, Updates and Special
                        Offers.*
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Book a Demo
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="BookDemoVidTabsSection">
          <div class="container bookDemo-sm-container">
            <div class="row BookDemoVidColsWrap">
              <div class="col-lg-12">
                <div class="tab-content">
                  <div id="home" class="tab-pane active">
                    <ImgWrapper className="FtrIconWrap BookDemoVidIconWrap">
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
                  <div id="menu1" class="tab-pane">
                    <ImgWrapper className="FtrIconWrap BookDemoVidIconWrap">
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
                  <div id="menu2" class="tab-pane">
                    <ImgWrapper className="FtrIconWrap BookDemoVidIconWrap">
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

                <ul class="nav nav-tabs justify-content-between">
                  <li class="active">
                    <a data-toggle="tab" href="#home">
                      <div class="BookDemoVidCols BookDemoVidCol1 d-flex">
                        <Currncy />

                        <h5>Value Proposition</h5>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu1">
                      <div class="BookDemoVidCols BookDemoVidCol2 d-flex">
                        <Calibrate />

                        <h5>Value Proposition</h5>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu2">
                      <div class="BookDemoVidCols BookDemoVidCol3 d-flex">
                        <ScaleIcon />
                        <h5>Value Proposition</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="BookDemoSecondSecWrap">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="BookDemoScndSecCols BookDemoScndSecCol1">
                  <div class="BookDemoScndSecTopImg text-center">
                    <StaticImage
                      src="../images/go-paperless.png"
                      alt="logo"
                      // placeholder="blurred"
                    />
                  </div>

                  <div class="d-flex">
                    <div class="IconHEADBookDem">
                      <BookDemoIconOne />
                    </div>

                    <div class="BookDemoScndSecTopDes">
                      <h3>
                        Go <br /> Paperless
                      </h3>
                      <p>
                        From field to office, you can easily access all your
                        documents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="BookDemoScndSecCols BookDemoScndSecCol2">
                  <div class="BookDemoScndSecTopImg text-center">
                    <StaticImage
                      src="../images/consolidated-app.png"
                      alt="logo"
                      // placeholder="blurred"
                    />
                  </div>
                  <div class="d-flex">
                    <div class="IconHEADBookDem">
                      <BookDemoIconTwo />
                    </div>

                    <div class="BookDemoScndSecTopDes">
                      <h3>
                        Consolidate
                        <br /> Apps
                      </h3>
                      <p>All the features you need, in one convenient place.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="BookDemoScndSecCols BookDemoScndSecCol3">
                  <div class="BookDemoScndSecTopImg text-center">
                    <StaticImage
                      src="../images/streamline-construction.png"
                      alt="logo"
                      // placeholder="blurred"
                    />
                  </div>

                  <div class="d-flex">
                    <div class="IconHEADBookDem">
                      <BookDemoIconThree />
                    </div>

                    <div class="BookDemoScndSecTopDes">
                      <h3>
                        Streamline
                        <br /> Construction Management
                      </h3>
                      <p>
                        Get organized and streamline all communications for
                        efficient collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="BookTestiHeading">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="BookDemoTestiHead text-center">
                  <h2>
                    These Construction
                    <br /> Leaders Always Have The
                    <br /> Right Tools at Hand
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <Companies />
      </Wrapper>
    </Layout>
  )
}

export default bookDemo

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
