import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Content = styled.div`
  max-width: 860px;
  padding: 1rem 1.0875rem;
  font-size: 1.2rem;
`

const Divider = styled.div`
  margin-left: 15px;
  display: inline-block;
  position: relative;
`

const NavLink = styled(Link)`
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    // background-color: #f9f8f0;
    background-color: #050505;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    // background-color: #f9f8f0;
    background-color: #050505;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const ExternalLink = styled(OutboundLink)`
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;
  // color: #f9f8f0;
  color: #050505;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    // background-color: #f9f8f0;
    background-color: #050505;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    // background-color: #f9f8f0;
    background-color: #050505;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  font-family: Raleway;
`

const Header = () => (
  <SiteHeader>
    <Content>
      <p>
        <HomeLink to="/">Main</HomeLink>
        {/* <NavLink to="/about">About</NavLink> */}
        <ExternalLink href="https://mossives.bandcamp.com/album/forms">
          Music
        </ExternalLink>
        <NavLink to="/writing">Writing</NavLink>
        <NavLink to="/works">Works</NavLink>
        <Divider>|</Divider>
        <ExternalLink href="https://are.na/keaton-armentrout/">
          Are.na
        </ExternalLink>
        <ExternalLink href="https://github.com/ksarmentrout">
          GitHub
        </ExternalLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
