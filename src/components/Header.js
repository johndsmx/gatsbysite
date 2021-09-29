import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FeatureDropdown from "./FeatureDropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    const el = document.getElementById("nav")
    if (el.style.display === "flex") {
      closeMenu()
    } else {
      openMenu()
    }
  }

  const openMenu = () => {
    const el = document.getElementById("nav")
    el.style.display = "flex"
    setMenuVisible(true)
  }

  const closeMenu = () => {
    const el = document.getElementById("nav")
    el.style.display = "none"
    setMenuVisible(false)
  }

  const toggleSubMenu = (e, dropdownOf) => {
    const el = document.getElementById(`section-${dropdownOf}`)

    if (window.screen.width < 1200 && el) {
      let arrow_el_id = `down-arrow-${dropdownOf}`
      const arrowEl = document.getElementById(arrow_el_id)

      if (el.style.display === "block") {
        el.style.display = "none"
        arrowEl.classList.remove("rotate_arrow")
      } else {
        el.style.display = "block"
        arrowEl.classList.add("rotate_arrow")
      }
    }
  }

  useEffect(() => {
    const hamburger = document.getElementById("hamburger-icon")
    if (menuVisible) hamburger.classList.add("cross")
    else hamburger.classList.remove("cross")
  }, [menuVisible])

  return (
    <>
      {/* <div class="HdrWrap"> */}

      <Wrapper>
        <Container>
          <LogoAndLinks>
            <Logo id="hdrlogo">
              <StaticImage
                src="../images/logo.png"
                alt="logo"
                // placeholder="blurred"
              />
            </Logo>

            <MenuIcon onClick={toggleMenu} id="hamburger-icon">
              <div />
              <div />
              <div />
              <div />
            </MenuIcon>

            <Links id="nav">
              <li
                className="has-dropdown"
                onClick={e => toggleSubMenu(e, "product")}
              >
                <Link to="/">
                  <span>Product</span>
                  <FontAwesomeIcon
                    className="dropdown-arrow"
                    id="down-arrow-product"
                    icon={faChevronRight}
                    size="1x"
                  />
                </Link>
                <FeatureDropdown />
              </li>
              <li>
                <Link to="/">Solutions</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Success Stories</Link>
              </li>
              <li
                className="has-dropdown ResourceDrpDwn"
                onClick={e => toggleSubMenu(e, "resources")}
              >
                <Link to="/">
                  <p>Resources</p>
                  <FontAwesomeIcon
                    className="dropdown-arrow"
                    id="down-arrow-resources"
                    icon={faChevronRight}
                    size="1x"
                  />
                </Link>

                <FeatureDropdown />
              </li>
              <BookBtn>
                <Link to="/BookDemo">
                  <span>Book a Demo</span>
                </Link>
              </BookBtn>
            </Links>
          </LogoAndLinks>
        </Container>
      </Wrapper>
    </>
  )
}

export default Header

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;

  .dropdown-arrow {
    transition: 0.3s;
    @media (min-width: 1200px) {
      transform: rotate(90deg);
    }
  }

  .rotate_arrow {
    transform: rotate(90deg);
  }

  .cross {
    div {
      &:nth-of-type(1) {
        transform: translate(5px, 14px) rotate(135deg);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(3) {
        opacity: 0;
      }
      &:nth-of-type(4) {
        transform: translate(5px, -11px) rotate(-135deg);
      }
    }
  }

  @media (max-width: 1200px) {
    width: 90%;
    margin: auto;
  }
`

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 26px 0 rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  max-width: 1300px;
  margin: auto;
  padding: 10px 30px;
  height: 70px;
`

const LogoAndLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  @media (max-width: 1200px) {
    align-items: center;
  }
`

const Logo = styled.div`
  display: grid;
  place-items: center;
  width: 170px;
`

const MenuIcon = styled.div`
  width: 36px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    height: 3px;
    width: 100%;
    background-color: black;
    transition: 0.3s;
    border-radius: 30px;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`

const Links = styled.ul`
  list-style: none;
  grid-auto-flow: column;
  align-items: stretch;
  grid-gap: 10px;
  padding: 0;
  margin: 0;
  display: grid;

  @media (max-width: 1200px) {
    display: none;
    flex-direction: column;
    position: absolute;
    background: white;
    left: 0;
    top: 80px;
    width: 100%;
    box-shadow: 0 31px 26px -12px rgb(0 0 0 / 15%);
    border-radius: 6px;
    padding: 20px 0;
  }

  a {
    text-decoration: none;
    color: #08172b;
  }

  > li {
    border-radius: 6px 6px 0 0;

    > a {
      border-radius: 6px 6px 0 0;
      display: grid;
      place-items: center;
      padding: 0 20px;
      height: 100%;
      font-family: "Airbnb Cereal App lighter";
      p {
        margin: 0;
      }
      @media (max-width: 1200px) {
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        align-items: center;
      }
    }

    @media (min-width: 1200px) {
      &:hover {
        position: relative;
        text-shadow: 0 0 1px black;
        background: #f4f4f4;
        & > div {
          text-shadow: none;
          display: block;
        }
      }
    }
  }

  .has-dropdown {
    > a {
      grid-template-columns: 1fr 30px;
    }
    @media (min-width: 1200px) {
      &:hover {
        &::after {
          content: "";
          width: 100%;
          height: 20px;
          background: #f4f4f4;
          position: absolute;
          left: 0;
          bottom: -20px;
        }
      }
    }
  }
`

const BookBtn = styled.li`
  display: grid;
  place-items: center;
  &:hover {
    background: none !important;
    text-shadow: none !important;
  }
  a {
    height: 40px !important;
    width: unset !important;
    padding: 0 !important;
    border-radius: 4px !important;
  }
  span {
    transition: 0.3s;
    background: ${({ theme }) => theme.color.p};
    border-radius: 4px;
    width: 130px;
    height: 100%;
    display: grid;
    place-items: center;
    font-family: "Airbnb Cereal App bold";
    &:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
  }

  @media (max-width: 1200px) {
    padding: 10px 30px !important;
    a {
      width: 100% !important;
    }
    span {
      width: 100% !important;
    }
  }
`
