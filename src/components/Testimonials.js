import React from "react"
import Slider from "react-slick"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import testimonial from "../images/testimonial.jpg"

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <RightArrow>
        <RightArrowIcon />
      </RightArrow>
    ),
    prevArrow: (
      <LeftArrow>
        <LeftArrowIcon />
      </LeftArrow>
    ),
  }

  return (
    <Wrapper>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Container>
        {/* <VideoSection>
          <Content>
            See how SiteMax users solve common industry problems with one
            construction management tool.
          </Content>
          <Icon>
            <TriangleIcon />
          </Icon>
        </VideoSection> */}
        <ReviewSection>
          <Slider {...settings}>
            <div key={1}>
              <ReviewCard>
                <Image>
                  <StaticImage
                    src="../images/infographic.jpg"
                    width={216}
                    height={216}
                    alt=""
                    placeholder="blurred"
                  />
                </Image>
                <ReviewContent>
                  <ReviewDesc>
                    All my reporting – daily safety inspections, hazard reports
                    and first-aid records are on SiteMax. The platform just
                    brings it all together in one easy package. Having
                    everything so close and convenient, it’s like a portable
                    office.
                  </ReviewDesc>
                  <ReviewAuth>Aaron Michaux</ReviewAuth>
                  <ReviewAuthPos>
                    Safety Officer | Bold Construction
                  </ReviewAuthPos>
                </ReviewContent>
              </ReviewCard>
            </div>
            <div key={2}>
              <ReviewCard>hey!!</ReviewCard>
            </div>
          </Slider>
        </ReviewSection>
      </Container>
    </Wrapper>
  )
}

export default Testimonials

const Wrapper = styled.section`
  .slick-next::before {
    content: "";
  }
  .slick-prev::before {
    content: "";
  }
  .slick-dots li button:before {
    font-size: 16px;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.color.p};
    opacity: 1;
  }
`

const Container = styled.div``

const VideoSection = styled.div`
  height: 700px;
  background-image: url(${testimonial});
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
    display: none;
  }
`

const Content = styled.p`
  font-family: "Airbnb Cereal App medium";
  font-size: 38px;
  color: white;
  text-align: center;
  width: 700px;
  margin: auto;
  padding: 180px 0 40px 0;
  line-height: 49px;
`

const Icon = styled.div`
  position: relative;
  display: grid;
  align-self: center;
  height: 105px;
  width: 105px;
  margin: auto;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.p};
  cursor: pointer;
`

const TriangleIcon = styled.div`
  position: absolute;
  left: 44px;
  top: 40px;
  width: 0;
  height: 0;
  border-top: 14px solid transparent;
  border-bottom: 14px solid transparent;
  border-left: 28px solid ${({ theme }) => theme.color.p};
`

const ReviewSection = styled.div`
  position: relative;
  padding: 110px 0px 50px 0px;
  max-width: 1300px;
  margin: auto;
  margin-top: -20px;
  box-shadow: 0px 2px 45px #00000026;
  border-radius: 6px;
  background-color: #ffffff;
  @media (max-width: 1200px) {
    padding-top: 35px;
    margin-top: 0px;
    border-radius: 0px;
  }
`

const ReviewCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: auto;
  width: fit-content;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-self: center;
  }
`

const Image = styled.div`
  margin-right: 90px;
  img {
    border-radius: 50%;
  }
  @media (max-width: 1200px) {
    margin: 0 auto 20px auto;
    img {
      width: 160px;
      height: 160px;
    }
  }
`

const ReviewContent = styled.div`
  width: 542px;
  @media (max-width: 1200px) {
    width: 260px;
    text-align: center;
  }
`

const ReviewDesc = styled.p`
  font-family: "Airbnb Cereal App lighter";
  font-size: 24px;
  margin-top: 0;
  color: #2a2a2a;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`

const ReviewAuth = styled.p`
  font-family: "Airbnb Cereal App bolder";
  font-size: 16px;
  color: #2a2a2a;
`

const ReviewAuthPos = styled.p`
  font-family: "Airbnb Cereal App lighter";
  font-size: 16px;
  color: #2a2a2a;
`

const LeftArrow = styled.div`
  z-index: 10 !important;
  cursor: pointer;
  position: absolute !important;
  top: 45% !important;
  left: 5% !important;
  width: 60px !important;
  height: 60px !important;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.p} !important;
  background-color: white !important;
  @media (max-width: 1200px) {
    width: 40px !important;
    height: 40px !important;
    top: 80px !important;
  }
`

const LeftArrowIcon = styled.div`
  width: 10px;
  height: 10px;
  border-width: 0 0 2px 2px;
  border-style: solid;
  border-color: black;
  transform: rotate(45deg);
  margin-left: 25px;
  margin-top: 25px;
  @media (max-width: 1200px) {
    margin-top: 14px;
    margin-left: 15px;
  }
`

const RightArrow = styled(LeftArrow)`
  left: unset !important;
  right: 5% !important;
`

const RightArrowIcon = styled(LeftArrowIcon)`
  border-width: 2px 2px 0 0;
  margin-left: 22px;
  @media (max-width: 1200px) {
    margin-top: 14px;
    margin-left: 12px;
  }
`
