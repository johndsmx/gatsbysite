import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import parse from "html-react-parser"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import "../css/custom.css"
// We're using Gutenberg so we need the block styles
import "@wordpress/block-library/build-style/style.css"
import "@wordpress/block-library/build-style/theme.css"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  // console.log(previous, "image")
  // console.log(featuredImage, "featured")
  const featuredImage = {
    fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const nextfeaturedImage = {
    fluid: next?.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: next.featuredImage?.node?.alt || ``,
  }

  const previousfeaturedImage = {
    fluid: previous?.featuredImage?.node?.localFile?.childImageSharp?.fluid,
    alt: previous?.featuredImage?.node?.alt || ``,
  }
  // console.log(next.uri, "next")

  return (
    <Layout>
      {/* <Banner /> */}
      <SEO title={post?.title} description={post?.excerpt} />

      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="blogSingleHeader">
          <div class="blogSingleBnrCont">
            <h1 itemProp="headline">{parse(post?.title)}</h1>

            <p>{post?.date}</p>
          </div>

          {featuredImage?.fluid && (
            <Image
              fluid={featuredImage.fluid}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!post.content && (
          <section itemProp="articleBody" className="SingleArticle">
            <div class="container-sml">{parse(post?.content)}</div>
          </section>
        )}

        {/* <hr /> */}
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li className="PrevBlogPost">
            {/* {previous && (

              <>
                <Image
                  fluid={previousfeaturedImage.fluid}
                  alt={previousfeaturedImage.alt}
                  style={{ marginBottom: 50 }}
                />
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              </>
            ) : (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )
            
             
            } */}

            {previous == null ? (
              <>
                {/* <Link to={previous?.uri} rel="prev">
                  {parse(previous?.title)} ←
                </Link> */}
              </>
            ) : (
              <>
                <Image
                  fluid={previousfeaturedImage.fluid}
                  alt={previousfeaturedImage.alt}
                  style={{ marginBottom: 50 }}
                />
                <div class="BlogNavCont">
                  <h4>Previous Post</h4>

                  <Link to={previous.uri} rel="prev">
                    {parse(previous.title)}
                  </Link>
                </div>
              </>
            )}
          </li>

          <li className="NextBlogPost">
            {next && (
              // <>
              // {featuredImage.fluid ? (
              <>
                <Image
                  fluid={nextfeaturedImage.fluid}
                  alt={nextfeaturedImage.alt}
                  style={{ marginBottom: 50 }}
                />

                <div class="BlogNavCont">
                  <h4>Next Post</h4>

                  <Link to={next.uri} rel="next">
                    {parse(next.title)}
                  </Link>
                </div>
              </>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title

      date(formatString: "MMMM DD, YYYY")

      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
