
import { Link } from "gatsby"
import styled from "@emotion/styled"
import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import "./BurgerMenu.css"

const NavLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #050505;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #050505;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    background-color: #050505;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const ExternalLink = styled(OutboundLink)`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #050505;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #050505;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    background-color: #050505;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export default () => (
  <div className="burger-menu">
    <ul className="burger-ul">
      <li>
        <NavLink to="/">Main</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/writing">Writing</NavLink>
      </li>
      <li>
        <NavLink to="/works">Works</NavLink>
      </li>
      <li>
        <NavLink to="/cv">CV</NavLink>
      </li>
      <li>
        <ExternalLink href="https://mossives.com">
          Music
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://are.na/keaton-armentrout/">
          Are.na
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://github.com/ksarmentrout">
          GitHub
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://twitter.com/keaton_sa/">
          Twitter
        </ExternalLink>
      </li>
    </ul>
  </div>
);
