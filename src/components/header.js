import React from "react"
import logo from "../images/logo.svg"


const Header = () => {
  return (

      <nav className="navbar is-fixed-top " role="navigation" aria-label="main-navigation">
        <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
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
            <a className="navbar-item" href="">
              BOOK
            </a>
            <a className="navbar-item" href="">
              PACKAGES
            </a>
            <a className="navbar-item" href="">
              INFO
            </a>
          </div>
        </div>
        </div>
      </nav>
  )
}

export default Header
