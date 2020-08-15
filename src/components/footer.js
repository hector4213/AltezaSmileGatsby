import React from "react"

import { Link } from "gatsby"

import logo from "../images/logo.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import "../styles/global.scss"

const Footer = () => {
  return (
    <footer className="footer is-primary">
      <nav className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <Link to="/">
              <img src={logo} alt="logo" width="112" height="28" />
            </Link>
          </div>
        </div>
        <div className="level-right">
          <a
            className="level-item"
            href="https://www.instagram.com/alteza.smile/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <FontAwesomeIcon icon={faFacebook} className="level-item" />
        </div>
      </nav>
    </footer>
  )
}

export default Footer
