import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import kebabCase from "lodash/kebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StyledInLink } from "../components/style-blocks"
import { intersperse } from "../utils/helpers"

import "./writing_post.css"
import WritingFooter from "../components/writing_footer"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`

const ArticleHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
  font-family: Raleway;
`

const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

const TagList = styled.h4`
  margin-top: 40px;
  margin-bottom: 0px;
  color: #606060;
  font-size: smaller;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    color: #875A5B;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  figcaption {
    color: #606060;
    font-size: smaller;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null

  return (
    <>
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          pathname={post.frontmatter.path}
          image={image}
        />
        <Content>
          <ArticleHeader>{post.frontmatter.title}</ArticleHeader>
          <HeaderDate>
            {post.frontmatter.date} - {post.fields.readingTime.text}
          </HeaderDate>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <TagList>
            Tags: {
              post.frontmatter.tags &&
              intersperse(post.frontmatter.tags.map(tag => (
                <StyledInLink to={`/tags/${kebabCase(tag)}/`}>
                  {tag}
                </StyledInLink>
              )), ', ')
            }
          </TagList>
        </Content>
        <WritingFooter></WritingFooter>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
        tags
        image: featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
