import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

import "../styles/global.scss"

const Footer = () => {
  return (
    <footer>
      <nav className="navbar level is-fixed-bottom">
        <div className="level-left">
          <div className="level-item">
            <h1>Alteza Beauty</h1>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <a href="https://www.instagram.com/alteza.smile/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="level-item">
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="level-item">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
