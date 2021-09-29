import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "./Header"
import Toprow from "./Toprow"
import Footer from "./Footer"
import SubHeader from "../components/SubHeader"
import styled from "styled-components"
import Oval from "../svg/oval.svg"

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

const SecondLayout = ({ isHomePage, children }) => {
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
        {/* <header className="global-header">
        {isHomePage ? (
          <h1 className="main-heading">
            <Link to="/">{parse(title)}</Link>
          </h1>
        ) : (
          <Link className="header-link-home" to="/">
            {title}
          </Link>
        )}
      </header> */}

        <Toprow />
        <Header />

       
          {/* <SubHeader /> */}
          {/* <OvalWrapperTop id="ovl_hdr">
          <Oval />
        </OvalWrapperTop> */}

        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default SecondLayout
const OvalWrapperTop = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  z-index: -5;
`

const OvalWrapperBottom = styled(OvalWrapperTop)`
  top: unset;
  bottom: -100px;
`
// import React from "react"
// import { createGlobalStyle, ThemeProvider } from "styled-components"
// import Header from "./Header"
// import Toprow from "./Toprow"
// import Footer from "./Footer"
// import "../css/typography.css"
// import "../css/global.css"
// import { config } from "@fortawesome/fontawesome-svg-core"
// import "@fortawesome/fontawesome-svg-core/styles.css"
// import { Link, useStaticQuery, graphql } from "gatsby"
// import parse from "html-react-parser"

// config.autoAddCss = false

// const GlobalStyle = createGlobalStyle`
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: "Airbnb Cereal App lighter";
//   }
// `

// const theme = {
//   color: {
//     p: "#ffcc32",
//     s: "#F4F4F4",
//   },
// }

// const Layout = ({ isHomePage, children }) => {
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
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <GlobalStyle theme="purple" />
//         <Toprow />
//         <Header />
//         {/* <main>{children}</main> */}
//         <Footer />
//       </ThemeProvider>
//     </>
//   )
// }

// export default Layout
