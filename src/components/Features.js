import React from "react";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import styled from "styled-components";
import Tasks from "../svg/tasks.svg";
import PunchList from "../svg/punch_lists.svg";
import DailyReport from "../svg/daily_reports.svg";
import Safety from "../svg/safety.svg";
import Photos from "../svg/photo_management.svg";
import TimeCards from "../svg/timecards.svg";
import Equipment from "../svg/equipment.svg";
import Documents from "../svg/documents.svg";
import Drawings from "../svg/drawings.svg";
import Rfi from "../svg/rfi.svg";
import PO from "../svg/purchase_orders.svg";
import CO from "../svg/change_orders.svg";

// const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const List = [
  {
    Icon: Tasks,
    title: "Tasks",
  },
  {
    Icon: DailyReport,
    title: "Daily Reports",
  },
  {
    Icon: Safety,
    title: "Safety",
  },
  {
    Icon: Photos,
    title: "Photos",
  },
  {
    Icon: TimeCards,
    title: "Time Cards",
  },
  {
    Icon: Equipment,
    title: "Equipment",
  },
  {
    Icon: Documents,
    title: "Documents",
  },
  {
    Icon: Drawings,
    title: "Drawings",
  },
  {
    Icon: Rfi,
    title: "RFI's",
  },
  {
    Icon: PO,
    title: "Purchase Orders",
  },
  {
    Icon: CO,
    title: "Change Orders",
  },
  {
    Icon: PunchList,
    title: "Punch Lists",
  },
];

const features = () => {
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
  };

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
        <Content>
          <Heading>
            <span>Everything You Need </span>and Nothing You Don't
          </Heading>
          <SubTitle>
            Stop wasting time and money on features you won't use. With Sitemax
            you get industry specific tools that compliment your existing
            solutions.
          </SubTitle>
          <Link to="/" style={{ textDecoration: "none" }}>
            Learn more about our unique features -&gt;{" "}
          </Link>
        </Content>
        <Media>
          {List.map(({ Icon, title }, i) => {
            return (
              <Card key={i}>
                <CardMedia>
                  <Icon />
                </CardMedia>
                <CardContent>
                  <p>{title}</p>
                  <Link to="/">Learn more</Link>
                </CardContent>
              </Card>
            );
          })}
        </Media>
        <SliderWrapper>
          <Slider {...settings}>
            <Slide key={1}>1</Slide>
            <Slide key={2}>2</Slide>
            <Slide key={3}>3</Slide>
            <Slide key={4}>4</Slide>
            <Slide key={5}>5</Slide>
          </Slider>
        </SliderWrapper>
      </Container>
    </Wrapper>
  );
};

export default features;

const Wrapper = styled.section`
  margin: 60px 0;
  padding: 0 15px;
  .slick-next::before {
    content: "";
  }
  .slick-prev::before {
    content: "";
  }
  .slick-dots li button:before {
    margin-top: 28px;
    font-size: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.color.p};
    opacity: 1;
  }
`;

const Content = styled.div`
  width: 25%;
  a {
    font-size: 20px;
    color: #2a2a2a;
    font-family: "Airbnb Cereal App bold";
  }
  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  ${Content} {
    margin-right: 100px;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Media = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Heading = styled.h1`
  font-family: "Airbnb Cereal App bolder";
  font-size: 42px;
  line-height: 44px;
  margin: 0;
  line-height: 3rem;
  span {
    color: ${({ theme }) => theme.color.p};
  }
`;

const SubTitle = styled.p`
  font-family: "Airbnb Cereal App lighter";
  font-size: 20px;
  line-height: 27px;
`;

const CardMedia = styled.div`
  background-color: ${({ theme }) => theme.color.s};
  height: 120px;
  border-radius: 8px;
  svg {
    width: 40px;
    height: 40px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    height: 80px;
    svg {
      width: 22px;
      height: 22px;
    }
    &:hover {
      border-radius: 8px;
    }
  }
`;

const Card = styled.div`
  width: 15%;
  margin-bottom: 15px;
  transition: 0.1s;
  a {
    display: none;
    text-decoration: none;
    text-align: center;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.p};
    border-radius: 8px;
    ${CardMedia} {
      background-color: ${({ theme }) => theme.color.p};
      path {
        fill: #000000;
      }
    }
    * {
      color: #2a2a2a !important;
      font-family: "Airbnb Cereal App bolder";
    }
    p {
      font-size: 18px;
    }
    a {
      display: block;
      font-size: 14px;
    }
  }
  @media (max-width: 1200px) {
    width: 22%;
  }
`;

const CardContent = styled.div`
  height: 60px;
  border-radius: 0px 0px 8px 8px;
  p {
    color: #8e8e8e;
    text-align: center;
    font-family: "Airbnb Cereal App lighter";
    margin: 10px 0 0;
    padding: 0px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  display: block;
  @media (min-width: 1200px) {
    display: none;
  }
`;

const Slide = styled.div`
  height: 290px;
  background-color: ${({ theme }) => theme.color.s};
  border-radius: 6px;
  text-align: center;
`;

const LeftArrow = styled.div`
  z-index: 10 !important;
  cursor: pointer;
  position: absolute !important;
  top: 45% !important;
  left: 5% !important;
  width: 30px !important;
  height: 30px !important;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.p} !important;
  background-color: white !important;
`;

const LeftArrowIcon = styled.div`
  width: 10px;
  height: 10px;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: black;
  transform: rotate(45deg);
  margin-left: 12px;
  margin-top: 10px;
`;

const RightArrow = styled(LeftArrow)`
  left: unset !important;
  right: 5% !important;
`;

const RightArrowIcon = styled(LeftArrowIcon)`
  border-width: 1px 1px 0 0;
  margin-left: 8px;
`;
