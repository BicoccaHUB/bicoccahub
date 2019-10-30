/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import CompactHeader from "./compactheader"

const Layout = ({ hero, children }) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {hero ? <Header /> : <CompactHeader />}
      <div className="container-fluid flex-grow-1" style={{ padding: 0 }}>
        {children}
      </div>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
