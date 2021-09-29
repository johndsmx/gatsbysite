import * as React from "react"
import Layout from "../components/Layout"
import "../css/custom.css"
import Banner from "../components/Banner"
import Features from "../components/Features"
import VideoSection from "../components/VideoSection"
import AnswerSection from "../components/Answer"
import Meet from "../components/Meet"
import Infographic from "../components/Infographic"
import Companies from "../components/Companies"
import Testimonials from "../components/Testimonials"
import RightPlan from "../components/RIghtPlan"
import PostDescription from "../components/PostDescription"
// import { graphql } from "gatsby"

// markup
const IndexPage = () => {
  return (
    // <Layout>
    //   <Banner />
    // </Layout>
    <Layout>
      <Banner />
      {/* <PostDescription /> */}
      {/* <VideoSection /> */}
      {/* <Meet /> */}
      <Features />
      <Infographic />
      <AnswerSection
        FirstTitle={"The Answer to Your Core Problems"}
        FirstSubTitle={
          "Sitemax is simple enough for any team to adopt, but powerful enough to run all your construction projects."
        }
        FirstSubHeading={"Project Management Simplified"}
        GeneralDescFirst={
          "SiteMax is built specifically for General Contractors who value collaboration and modern construction management with ease of use."
        }
        GeneralDescSecond={
          "Simple, streamlined and purpose-built for construction, SiteMax puts success at your fingertips."
        }
        SecondSubHeading={"Real Time Project Management Tools"}
        ContractorsDesc={
          "When you choose SiteMax you choose clear field to office communication. Easily access project information, from punch lists to project drawings all from the palm of your hand."
        }
        ThirdSubHeading={"A Birds Eye View into Your Projects"}
        DevelopersDesc={
          "SiteMax gives you full control by easily tracking all your projects in one place. Get real time visibility of all current and past project details to ensure compliance, productivity, and profitability."
        }
      />
      <RightPlan />
      <Testimonials />
      <Companies />
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     PostDesc: allWpPost {
//       nodes {
//         title
//         content
//       }
//     }
//   }
// `
export default IndexPage
