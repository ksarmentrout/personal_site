import { Link } from "gatsby";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 1.45rem 1.0875rem;
`;

const OuterContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 78vh;
  text-align: center;
`;

const PageHeader = styled.h1`
  text-align: center;

  @media only screen and (max-width: 800px) {
    margin-top: 7%;
  }
`;

const StyledExLink = styled.a`
  color: #875A5B;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledInLink = styled(Link)`
  color: #875A5B;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledDownloadLink = styled.a`
  color: #875A5B;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export {
  Container,
  Content,
  OuterContainer,
  PageHeader,
  StyledExLink,
  StyledInLink,
  StyledDownloadLink,
};
