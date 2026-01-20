import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

import { Content, PageHeader, StyledInLink } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={"Tag: " + tag} />
      <Content>
        <PageHeader>{tagHeader}</PageHeader>
        <ul>
          {/* <ul style={{ "list-style-type" : "none" }}> */}
          {edges.map(({ node }) => {
            const { title, path } = node.frontmatter
            return (
              <li key={title}>
                <StyledInLink to={path}>{title}</StyledInLink>
              </li>
            )
          })}
        </ul>
        <div style={{ 'text-align': 'center' }}>
          <StyledInLink to="/tags">All tags</StyledInLink>
        </div>
      </Content>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`