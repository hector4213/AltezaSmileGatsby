import React from "react"
import logo from "../images/logo.svg"


const Header = () => {
  return (
    <header>
      <nav className="navbar is-primary" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} alt="logo" width="112" height="75"/>
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbaritems"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbaritems" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              BOOK
            </a>
            <a className="navbar-item">
              PACKAGES
            </a>
            <a className="navbar-item">
              INFO
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
