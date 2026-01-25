import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import WritingFooter from "../components/writing_footer"
import { Content, PageHeader } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleDate = styled.h5`
  display: inline;
  color: #606060;
`

const ArticleHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  font-family: Raleway;
`

const ReadingTime = styled.h5`
  display: inline;
  color: #606060;
  font-family: Raleway;
`

const WritingPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Writing" />
      <Content>
        <PageHeader>Writing</PageHeader>
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id}>
              <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: inherit;
                `}
              >
                <ArticleHeader>{node.frontmatter.title} </ArticleHeader>
                <div>
                  <ArticleDate>{node.frontmatter.date}</ArticleDate>
                  <ReadingTime> - {node.fields.readingTime.text}</ReadingTime>
                </div>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
      </Content>
      <WritingFooter></WritingFooter>
    </Layout>
  )
}

export default WritingPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
