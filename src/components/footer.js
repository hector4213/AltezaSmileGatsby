import React from "react"

import logo from '../images/logo.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import "../styles/global.scss"

const Footer = () => {
  return (
    <footer>
      <nav className="navbar level is-fixed-bottom">
        <div className="container">
          <a className="navbar-item" href="">
            <img src={logo} alt="logo" width="112" height="75" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a href="https://www.instagram.com/alteza.smile/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        
        <div className="navbar-item">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="navbar-item">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
