import PropTypes from "prop-types"
import React from "react"
import { Container, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackgroundImage from "gatsby-background-image"
import Logo from "../logo.svg"

const BicoccaHub = () => (
  <h1>
    <Logo className="logo" /> Bicocca<span>Hub</span>
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
    <header className="hero-image">
      {hero === true ? (
        <BackgroundImage fluid={data.hero.childImageSharp.fluid}>
          <div
            className="d-flex flex-column"
            style={{ height: "60vh", display: "block" }}
          >
            <div className="d-flex text-center align-items-center justify-content-center flex-grow-1">
              <Container>
                <div className="title-container text-center rounded">
                  <BicoccaHub />
                </div>
                <Button className="mt-5" href="#main">
                  <FontAwesomeIcon icon="long-arrow-alt-down" /> Scorri
                </Button>
              </Container>
            </div>
          </div>
          {/* <center><Button style={{ marginBottom: '2rem' }} href='#main-view' variant="success" size='lg'>Entra</Button></center> */}
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
