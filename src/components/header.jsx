import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Logo from "../logo.svg"

const BicoccaHub = () => (
  <h1>
    <Logo /> Bicocca<span>Hub</span>
  </h1>
)

function Header({ hero }) {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <header>
      {hero === true ? (
        <BackgroundImage fluid={data.hero.childImageSharp.fluid}>
          <Container>
            <div className="title-container text-center rounded">
              <BicoccaHub />
            </div>
          </Container>
        </BackgroundImage>
      ) : (
        <div className="text-center my-5">
          <a className="hidden-link" href="/">
            <BicoccaHub />
          </a>
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
