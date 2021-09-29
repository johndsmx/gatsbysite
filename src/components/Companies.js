import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1
};

const Companies = () => {
  return (
    <Wrapper>
      <Helmet>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Helmet>

      <Container className="companiesWrapMain">
        <h4>These Construction Leaders Always Have the Right Tools at Hand</h4>

        <div id="companies-mobile">
          <Slider {...settings}>
            <div>
              <StaticImage src="../images/bold.png" alt="" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/caliber.png" alt="" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/premier.png" alt="" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/enterprise.png" alt="" placeholder="blurred" />
            </div>
            <div>
              <StaticImage src="../images/dropbox.png" alt="" placeholder="blurred" />
            </div>
          </Slider>
        </div>

        <ul id="companies-desktop">
          <li>
            <StaticImage src="../images/bold.png" alt="" placeholder="blurred" />
          </li>
          <li>
            <StaticImage src="../images/caliber.png" alt="" placeholder="blurred" />
          </li>
          <li>
            <StaticImage src="../images/premier.png" alt="" placeholder="blurred" />
          </li>
          <li>
            <StaticImage src="../images/enterprise.png" alt="" placeholder="blurred" />
          </li>
          <li>
            <StaticImage src="../images/dropbox.png" alt="" placeholder="blurred" />
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Companies;

const Wrapper = styled.section`
  .slick-slide {
    > div {
      text-align: center;
      padding-right: 40px;
    }
  }
  .slick-dots {
    transform: translateY(14px);
  }
  .slick-dots li button:before {
    font-size: 16px;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.color.p};
    opacity: 1;
  }
  @media (min-width: 1000px) {
    #companies-mobile {
      display: none;
    }
  }

  @media (max-width: 1000px) {
    #companies-desktop {
      display: none;
    }
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 50px 30px 0;
  h4 {
    font-family: "Airbnb Cereal App bold";
    font-size: 24px;
    color: #2a2a2a;
    letter-spacing: 0;
    text-align: center;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0;
    padding: 0;
    li {
      text-align: center;
    }
  }

  @media (max-width: 1100px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 30px;
    }
  }

  @media (max-width: 1100px) {
    ul {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  }
`;
