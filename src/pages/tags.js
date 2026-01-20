import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import kebabCase from "lodash/kebabCase"

import { Content, PageHeader, StyledInLink } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <SEO title="Tags" />
    <Content>
      <PageHeader>Tags</PageHeader>
      <ul>
        {/* <ul style={{ "list-style-type" : "none" }}> */}
        {
          group
            .sort((a, b) => a.fieldValue.localeCompare(b.fieldValue))
            .map(tag => (
              <li key={tag.fieldValue}>
                <StyledInLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </StyledInLink>
              </li>
            ))
        }
      </ul>
    </Content>
  </Layout>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
        totalCount
      }
    }
  }
`