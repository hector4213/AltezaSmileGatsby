import React, { useState } from "react"
import logo from "../images/logo.svg"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src={logo} alt="logo" width="112" height="75" />
          </a>
          <a
            onClick={() => setIsActive(!isActive)}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbaritems"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbaritems"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link className="navbar-item" to="/book" title="book">
              <span>BOOK</span>
            </Link>
            <AnchorLink
              className="navbar-item"
              to="/#packages"
              title="packages"
            >
              <span>PACKAGES</span>
            </AnchorLink>
            <AnchorLink className="navbar-item" to="/#info" title="info">
              <span>INFO</span>
            </AnchorLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
