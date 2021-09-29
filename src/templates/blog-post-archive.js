import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Imagee from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
import Oval from "../svg/oval.svg"
import Layout from "../components/Layout"
import "../css/custom.css"
import "../css/global.css"
import "../css/typography.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

import { Helmet } from "react-helmet"
import SecondLayout from "../components/SecondLayout"
const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  // const postImg = data.allWpPost.nodes.featuredImage
  // console.log(posts, "post")
  // console.log(
  //   postsfeaturedImage.node.localFile.childImageSharp.fluid,
  //   "post imge"
  // )
  // console.log(posts[1].featuredImage.node.localFile.childImageSharp.fluid, "fe")
  // console.log(posts, "all post")
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 3,
    slidesToScroll: 3,
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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  if (!posts.length) {
    return (
      <Layout isHomePage>
        <SEO title="All posts" />

        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }
  // const featuredImage = {
  //   fluid: posts.featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   alt: posts.featuredImage?.node?.alt || ``,
  // }
  // console.log(posts, "featured")
  // console.log(
  //   posts[1].featuredImage?.node?.localFile?.childImageSharp?.fluid,
  //   "img"
  // )
  const firstFeaturedImage = {
    fluid: posts[1].featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: posts[1].featuredImage?.node?.alt || ``,
  }
  return (
    <SecondLayout isHomePage>
      <SEO title="All posts" />

      {/* <Testimonials /> */}
      {/* <ol style={{ listStyle: `none` }}> */}
      {/* {posts.map(post => {
        const title = post.title
        console.log(
          post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
          "all post"
        )
        const image = getImage(
          post.featuredImage?.node?.localFile?.childImageSharp?.fluid
          // post.featuredImage?.node?.localFile?.childImageSharp?.fluid
        ) */}

      <div class="bnrCont text-center">
        <div class="container">
          <h1>
            {`Project Management Tips`}
            <br></br>
            {`& Trends, Delivered.`}
          </h1>

          <p>
            Join productivity hackers from around the<br></br> world that
            receive the sitemax newsletter
          </p>
        </div>
      </div>
      {/* </div> */}
      <OvalWrapperTop id="ovl_hdr">
        <Oval />
      </OvalWrapperTop>
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
        <Container className="container ftrd-artcls-cont">
          <h2 style={{ marginBottom: "35px", color: "#FFCC32" }}>
            Featured Articles
          </h2>
          <div class="ftrcd-post_main">
            <h2>{posts[1].title}</h2>

            <Imagee
              fluid={firstFeaturedImage.fluid}
              alt={firstFeaturedImage.alt}
              style={{ marginBottom: 50 }}
            />
          </div>

          <ReviewSection>
            <Slider {...settings} className="blog_slick">
              {posts.map(post => {
                console.log(
                  post.featuredImage?.node?.localFile?.childImageSharp?.fluid
                    ?.src,
                  "slider Image"
                )
                const title = post.title
                const FeaturedImage = {
                  fluid:
                    post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
                  alt: post.featuredImage?.node?.alt || ``,
                }
                const image = getImage(
                  FeaturedImage.fluid

                  // post.featuredImage?.node?.localFile?.childImageSharp?.fluid
                  // post.featuredImage?.node?.localFile?.childImageSharp?.fluid
                )
                return (
                  // <div key={1}>
                  <ReviewCard className="blogsldr-main">
                    <Imagee
                      fluid={FeaturedImage.fluid}
                      //  alt={featuredImage.alt}
                      style={{ marginBottom: 50 }}
                    />
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>

                    {/* <PostCard /> */}
                    {/* <GatsbyImage
                        // src="../images/infographic.jpg"
                        image={
                          image
                          // post.featuredImage?.node?.localFile?.childImageSharp
                          //   ?.fluid
                        }
                        width={216}
                        height={516}
                        alt=""
                        placeholder="blurred"
                      /> */}
                    {/* <StaticImage
                        src="../images/infographic.jpg"
                        width={216}
                        height={216}
                        alt=""
                        placeholder="blurred"
                      /> */}
                    {/* </Imagee> */}

                    {/* <Feature /> */}
                    <ReviewContent>
                      <ReviewDesc>{title}</ReviewDesc>
                      {/* <ReviewAuth>Aaron Michaux</ReviewAuth>
                      <ReviewAuthPos>
                        Safety Officer | Bold Construction
                      </ReviewAuthPos> */}
                    </ReviewContent>
                  </ReviewCard>
                  // </div>
                  // <div key={2}>
                  //   <ReviewCard>hey!!</ReviewCard>
                  // </div>
                )
              })}
            </Slider>
          </ReviewSection>
          {/* <Cards /> */}
          {/* <PostCard /> */}
        </Container>
      </Wrapper>

      {/* })} */}

      <Wrapper className="topVideosMainWrap">
        <Container className="container">
          <h2 style={{ marginBottom: "35px", color: "#FFCC32" }}>Top Videos</h2>

          <div class="row tp-videos-main">
            <div class="col-lg-6">
              <div class="tpvideo-left">
                <ImgWrapper className="video-wrp-main">
                  <StaticImage
                    src="https://via.placeholder.com/858x380"
                    alt=""
                    placeholder="blurred"
                  />
                  <PlayIcon className="ply_icn">
                    <TriangleIcon />
                  </PlayIcon>
                </ImgWrapper>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="tpvideo-right">
                <div class="tpvideo-right-child tpvideo-right-child1 d-flex align-items-center">
                  <ImgWrapperSmall className="videoSmall">
                    <StaticImage
                      src="https://via.placeholder.com/858x380"
                      alt=""
                      placeholder="blurred"
                    />
                  </ImgWrapperSmall>

                  <h4>Lorem Ipsum Dolor sit amet</h4>
                </div>

                <div class="tpvideo-right-child tpvideo-right-child1 d-flex align-items-center">
                  <ImgWrapperSmall className="videoSmall">
                    <StaticImage
                      src="https://via.placeholder.com/858x380"
                      alt=""
                      placeholder="blurred"
                    />
                  </ImgWrapperSmall>

                  <h4>Lorem Ipsum Dolor sit amet</h4>
                </div>

                <div class="tpvideo-right-child tpvideo-right-child1 d-flex align-items-center">
                  <ImgWrapperSmall className="videoSmall">
                    <StaticImage
                      src="https://via.placeholder.com/858x380"
                      alt=""
                      placeholder="blurred"
                    />
                  </ImgWrapperSmall>

                  <h4>Lorem Ipsum Dolor sit amet</h4>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </SecondLayout>
  )
}

export default BlogIndex

const OvalWrapperTop = styled.div`
  position: absolute;
  top: 295px;
  left: 0;
  z-index: -5;
  bottom: auto;
  right: 0;
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

const ImgWrapperSmall = styled.div`
  position: relative;
  width: fit-content;
  padding: 10px;
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
  left: 376px;
  top: 145px;
  cursor: pointer;
  width: 106px;
  height: 106px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 15px 45px #ffcc324d;
  @media (max-width: 1200px) {
    left: 36%;
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

// const VideoSection = styled.div`
//   height: 700px;
//   background-image: url(${testimonial});
//   background-size: cover;
//   background-repeat: no-repeat;
//   @media (max-width: 1200px) {
//     display: none;
//   }
// `

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

const ReviewSection = styled.div`
  // position: relative;
  // padding: 110px 0px 50px 0px;
  // max-width: 1300px;
  // margin: auto;
  // margin-top: -20px;
  // box-shadow: 0px 2px 45px #00000026;
  // border-radius: 6px;
  // background-color: #ffffff;
  // @media (max-width: 1200px) {
  //   padding-top: 35px;
  //   margin-top: 0px;
  //   border-radius: 0px;
  // }
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
  // width: 542px;
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

export const pageQuery = graphql`
  query WordPressPostArchive {
    allWpPost {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
              children {
                id
              }
            }
          }
        }
      }
    }
  }
`
