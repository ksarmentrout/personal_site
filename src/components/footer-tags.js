import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import React from "react"
import PropTypes from "prop-types"

import kebabCase from "lodash/kebabCase"

import { StyledInLink } from "../components/style-blocks"
import { intersperse } from "../utils/helpers"

const TagHolder = styled.div`
    width: 30%;
    font-size: smaller;
`

const FooterTags = () => (
  <StaticQuery
    query={graphql`
      query {
          allMarkdownRemark(limit: 2000) {
          group(field: {frontmatter: {tags: SELECT}}) {
              fieldValue
              totalCount
          }
          }
      }
    `}
    render={(data
    ) => (
      <TagHolder>
        {/* Popular Tags:&nbsp;  */}
        <h4 style={{ "margin-bottom": "0px" }}>Popular Tags:</h4>
        {
          intersperse(
            data.allMarkdownRemark.group
              .sort((a, b) => a.totalCount < b.totalCount ? 1 : -1)  // Sort tags by decreasing occurrences
              .slice(0, 10)  // Take only the top 10 most used tags
              .map(tag => (
                <StyledInLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </StyledInLink>
              )),
            ', '
          )
        }
      </TagHolder>
    )}
  />
)
FooterTags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

// const FooterTags = ({
//   data: {
//     allMarkdownRemark: { group },
//   },
// }) => (
// // const FooterTags = () => (
//     <div>
//     {
//     intersperse(
//         group
//         .sort((a, b) => a.totalCount > b.totalCount)
//         .map(tag => (
//             <StyledInLink to={`/tags/${kebabCase(tag)}/`}>
//             {tag}
//             </StyledInLink>
//         )),
//     ', '
//     )
//     } 
//     </div>
// )
// FooterTags.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//   }),
// }

export default FooterTags;


