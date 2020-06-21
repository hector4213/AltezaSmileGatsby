import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem } from "@fortawesome/free-regular-svg-icons"
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons"

const Packages = () => {
  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <FontAwesomeIcon icon={faGem} />
            </div>
            <div className="media-content">
            <div className="content">
            <h1 className="title is-5">Diamond Package</h1>
            </div>
            </div>
          </article>
        </div>
      </div>

      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <FontAwesomeIcon icon={faGem} />
            </div>
            <div className="media-content">
            <div className="content">
            <h1 className="title is-5">Platinum Package</h1>
            </div>
            </div>
          </article>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <FontAwesomeIcon icon={faPaintBrush} />
            </div>
            <div className="media-content">
            <div className="content">
            <h1 className="title is-5">Touch Up</h1>
            </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Packages
