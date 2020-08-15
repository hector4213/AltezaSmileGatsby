import React from "react"
import ColumnItem from "./columnItem"

import Bounce from "react-reveal"

import lightLogo from "../images/icons/light.png"
import peroxLogo from "../images/icons/peroxide.png"
import certified from "../images/icons/certified.png"
import professional from "../images/icons/professional.png"

const Difference = () => {
  return (
    <section className="section">
      <div className="card" id="info">
        <div className="card-content">
          <div className="columns ">
            <Bounce left>
              <ColumnItem
                logo={lightLogo}
                title="Our gels are FDA approved and Health Canada approved. Your comfort
      is our number one priority"
              />
            </Bounce>
            <Bounce left>
              <ColumnItem
                logo={peroxLogo}
                title="Providing a service with minimal to no sensitivity with our neutral ph gel formula"
              />
            </Bounce>
            <Bounce right>
              <ColumnItem
                logo={professional}
                title="With our extensive training, Alteza smile will ensure that you have
            the brightest smile possible"
              />
            </Bounce>
            <Bounce right>
              <ColumnItem
                logo={certified}
                title="With our extensive training, Alteza smile will ensure that you have
            the brightest smile possible"
              />
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Difference
