import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import Twitter from "../svg/twitter.svg"
import Facebook from "../svg/facebook.svg"
import Instagram from "../svg/instagram.svg"
import Oval from "../svg/oval.svg"
import RightArrow from "../svg/right-arrow.svg"

const List = [
  {
    title: "Company Info",
    links: [
      { label: "About Us", to: "/link" },
      { label: "Careers", to: "/link" },
      { label: "Events", to: "/link" },
      { label: "Press Room", to: "/link" },
      { label: "Podcast", to: "/link" },
      { label: "Blog", to: "/blog-post-archive" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { label: "Training", to: "/link" },
      { label: "Contact Sales", to: "/link" },
      { label: "Live Support", to: "/link" },
      { label: "Email Signup", to: "/link" },
    ],
  },
  {
    title: "Application & Platform",
    links: [
      { label: "Login", to: "/link" },
      { label: "Integrations", to: "/link" },
      { label: "Library", to: "/link" },
      { label: "Partners", to: "/link" },
      { label: "Support", to: "/link" },
      { label: "Download SiteMax", to: "/link" },
    ],
  },
  {
    title: "Product & Solutions",
    links: [
      { label: "Feature Overview", to: "/link" },
      { label: "Go Paperless", to: "/link" },
      { label: "Consolidate Your Apps", to: "/link" },
      { label: "Streamlined Construction", to: "/link" },
      { label: "Pricing", to: "/link" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Success Stories", to: "/link" },
      { label: "Guides Webinars & More", to: "/link" },
      { label: "Blog", to: "/blog-post-archive" },
    ],
  },
]

const Footer = props => {
  return (
    <Wrapper>
      <BookDemoWrapper>
        {/* <h4>{props.footerText}</h4> */}
        <h4>See How You Can Build Every Project in One Place</h4>
        <Link to="/">
          Book a Demo <RightArrow />
        </Link>
      </BookDemoWrapper>
      <OvalWrapper id="ovl_ftr">
        <Oval />
      </OvalWrapper>
      <Container>
        <Logo id="ftr_lgo">
          <StaticImage
            src="../images/logo-white.png"
            alt="logo"
            // placeholder="blurred"
          />
        </Logo>

        <Grid>
          {List.map(({ title, links }, i) => (
            <Item key={i}>
              <h6>{title}</h6>
              <ul>
                {links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </Item>
          ))}

          <Item>
            <h6>Connect with Us</h6>
            <SocialIcons>
              <a href="">
                <Twitter />
              </a>
              <a href="">
                <Facebook />
              </a>
              <a href="">
                <Instagram />
              </a>
            </SocialIcons>
          </Item>
        </Grid>

        <Copyright>
          <p>
            © 2021 SiteMax Systems Inc. 1110 Hamilton Street Vancouver. All
            Rights reserved.
          </p>
          <p>
            <Link to="">Privacy Policy</Link> |{" "}
            <Link to="">Terms of Service</Link>
          </p>
        </Copyright>
      </Container>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const Container = styled.div`
  background: #08172b;
  color: #cccccc;
  padding: 200px 15px 60px;

  @media (min-width: 1200px) {
    padding: 50px;
  }
`

const Logo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 1200px) {
    text-align: center;
    margin-bottom: 0px;
  }
`

const OvalWrapper = styled.div`
  margin-bottom: -80px;
  svg {
    max-width: 100vw;
  }

  @media (max-width: 768px) {
    margin-bottom: -220px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 40px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const Item = styled.div`
  h6 {
    font-family: "Airbnb Cereal App bolder";
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 15px;
    margin-top: 38px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    list-style: none;
    grid-gap: 4px;
    color: #8e8e8e;
    li {
      font-size: 14px;
    }
  }
`

const SocialIcons = styled.div`
  display: grid;
  grid-template-columns: 25px 25px 25px;
  grid-gap: 10px;
  align-items: center;
`

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 40px 0 0 0;

  @media (min-width: 1200px) {
    flex-direction: row;
    p {
      padding: 0 5px 0 0;
    }
  }
`

const BookDemoWrapper = styled.div`
  transform: translateY(100px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  justify-content: space-between;
  background: ${({ theme }) => theme.color.p};
  max-width: 1044px;
  box-shadow: 0 2px 45px 0 rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 30px 40px;
  margin: auto;
  h4 {
    color: #2a2a2a;
    font-size: 50px;
    margin: 0;
    line-height: 55px;
    font-family: "Airbnb Cereal App bolder";
  }
  a {
    background: #2a2a2a;
    color: ${({ theme }) => theme.color.p};
    box-shadow: 0 10px 45px 0 rgba(146, 99, 16, 0.6);
    font-family: "Airbnb Cereal App bold";
    border-radius: 4px;
    font-size: 24px;
    padding: 15px 40px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 15px;
      transition: 0.3s;
    }
    &:hover {
      svg {
        transform: translateX(10px);
      }
    }
  }

  @media (max-width: 1200px) {
    width: 80%;
    grid-template-columns: 1fr;
    text-align: center;
    padding: 30px 20px;
    h4 {
      font-size: 40px;
      line-height: 40px;
    }
    a {
      width: 70%;
    }
  }
`
