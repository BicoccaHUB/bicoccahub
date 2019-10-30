import PropTypes from "prop-types"
import React from "react"
import { Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Logo from "../logo.svg"

function Header() {
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
      <BackgroundImage fluid={data.hero.childImageSharp.fluid}>
        <Container>
          <div className="title-container">
            <h1 className="text-center">
              <Logo />
              Bicocca<span>Hub</span>
            </h1>
          </div>
        </Container>
      </BackgroundImage>
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
