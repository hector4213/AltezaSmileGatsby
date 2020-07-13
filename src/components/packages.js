import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGem } from "@fortawesome/free-regular-svg-icons"
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons"

const Packages = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title has-text-centered">Affordable packages</h1>
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
                    <h2 className="subtitle">$150</h2>
                    <p>
                      1 hour session of withitening, however the total session
                      is 1 hour and 30 minutes. You will see a difference
                      ranging from 4 to 12 shades. We prepare and protect your
                      gums with vitamin E oil and give you a custom treatment to
                      suit your needs.
                    </p>
                    <button>Choose</button>
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
                    <h2 className="subtitle">$120</h2>
                    <p>
                      45 minute session of whitening, however the total session
                      is 1 hour and 15 minutes. You will see a difference
                      ranging from 2 to 8 shades. We prepare and protect your
                      gums with vitamin E oil and give you a custom treatment to
                      suit your needs
                    </p>
                    <button>Choose</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="column is-flex">
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <FontAwesomeIcon icon={faPaintBrush} />
                </div>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-5">Touch Up</h1>
                    <h2 className="subtitle">$75</h2>
                    <p>
                      30 minutes of whitening, in total 45 minutes. This is for
                      customers who need a touchup and previously received
                      whitening from Alteza Smile. It is recommended that they
                      come every 4 weeks
                    </p>
                    <br/>
                    <button className="is-white">Choose</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
