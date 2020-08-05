import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"

import "./layout.css"

const Layout = ({ props, children }) => {
  return (
    <>
      <Navbar />
      <Header />
      <div>
        <main>{children}</main>
        <footer />
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
