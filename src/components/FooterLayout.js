import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./Header"
import Toprow from "./Toprow"
import Footer from "./TermsFooter"

// import Footer from "./Footer"
import Banner from "./Banner"
import "../css/typography.css"
import "../css/global.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Airbnb Cereal App lighter";
  }
`

const theme = {
  color: {
    p: "#ffcc32",
    s: "#F4F4F4",
  },
}

const Layout = ({ isHomePage, children }) => {
  //   const {
  //     wp: {
  //       generalSettings: { title },
  //     },
  //   } = useStaticQuery(graphql`
  //     query LayoutQuery {
  //       wp {
  //         generalSettings {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `)

  return (
    // <div className="global-wrapper" data-is-root-path={isHomePage}>
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme="purple" />

        <Toprow />
        <Header />

        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
