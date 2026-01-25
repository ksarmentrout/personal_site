import styled from "@emotion/styled"
import React from "react"

import FooterTags from "./footer-tags"
import { StyledInLink } from "./style-blocks"

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
`

const Divider = styled.hr`
  display: block;
  height: 1px;
  width: 100%;
  background-color: #050505;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
`

const LinkStack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const WritingFooter = () => {

  return (
  <div>
    <Divider></Divider>
    <Footer>
        <LinkStack>
          <h4 style={{ "margin-bottom": "0px" }}>Navigation:</h4>
          <StyledInLink to="/writing">Writing Home</StyledInLink>
          <StyledInLink to="/tags">All Tags</StyledInLink>
          <StyledInLink to="/rss.xml">RSS Feed</StyledInLink>
        </LinkStack>
        <FooterTags></FooterTags>
    </Footer>
  </div>
  )
}

export default WritingFooter
