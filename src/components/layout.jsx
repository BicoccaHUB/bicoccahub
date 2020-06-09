/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ hero, children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          version
          repoUrl
        }
      }
    }
  `)
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Header hero={hero} />
      <div
        id="main-view"
        className="container-fluid flex-grow-1"
        style={{ padding: 0 }}
      >
        {children}
      </div>
      <footer className="text-center align align-middle">
        BicoccaHUB {data.site.siteMetadata.version} - Copyright Sofia Amaru (
        {new Date().getFullYear()}), released under MIT License -{" "}
        <a href={data.site.siteMetadata.repoUrl}>Fork me on GitHub</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
