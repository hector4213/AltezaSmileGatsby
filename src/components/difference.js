import React from "react"
import ColumnItem from "./columnItem"

import lightLogo from "../images/icons/light.png"
import peroxLogo from "../images/icons/peroxide.png"
import certified from "../images/icons/certified.png"
import professional from "../images/icons/professional.png"

const Difference = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">Choose Alteza Smile</h1>
        <div className="columns is-vcentered">
          <ColumnItem
            logo={lightLogo}
            title="Our gels are FDA approved and Health Canada approved. Your comfort
      is our number one priority"
          />
          <ColumnItem
            logo={peroxLogo}
            title=" We provide a service that ensure minimal to no sensitivity, thanks to our neutral ph gel formula"
          />
          <ColumnItem
            logo={professional}
            title="With our extensive training, Alteza smile will ensure that you have
            the brightest smile possible"
          />
          <ColumnItem
            logo={certified}
            title="With our extensive training, Alteza smile will ensure that you have
            the brightest smile possible"
          />
        </div>
      </div>
    </section>
  )
}

export default Difference
