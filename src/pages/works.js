import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Content, PageHeader } from "../components/style-blocks"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./works.css"


const WorkHeader = styled.h3`
  display: inline;
  border-radius: 1em 0 1em 0;
  font-family: Raleway;
`

const WorkDate = styled.h5`
  display: inline;
  color: #606060;
`

const WorkLink = ({ href, title, date, description }) => (
  <a
    href={href}
    css={css`
      text-decoration: none;
      color: inherit;
    `}
  >
    <WorkHeader>{title}</WorkHeader>
    <div>
      <WorkDate>{date}</WorkDate>
    </div>
    <p
      css={css`
      font-weight: 400;
      `}
    >
      {description}
    </p>
  </a>
)

const WorksPage = ({ data }) => (
  <Layout>
    <SEO title="Works" />
    <Content>
      <PageHeader>Works</PageHeader>
      <WorkLink
        href="https://www.sciartmagazine.com/movement-mapped.html"
        title="Place Memory"
        date="2021"
        description={`
            A series of digital artworks visualizing the mechanisms for neural encoding of position and memory, and tying 
            them through photos to specific places I've lived. Featured in the Spring 2021 issue of SciArt Magazine.
          `}
      />
      <WorkLink
        href="https://wisdomoftheflock.com"
        title="Wisdom of the Flock"
        date="2020"
        description={`
            A curated collection of tweets that each ask what "should" or "must" be.
            The collection as a whole investigates how people use their Twitter audience as a 
            collective intelligence to answer primarily moral questions.
          `}
      />
    </Content>
  </Layout>
)

export default WorksPage
