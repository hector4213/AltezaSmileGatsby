import React from "react";

import Difference from "../components/difference";
import Packages from '../components/packages';
import Video from './video'

const Content = () => {
  return (
    <section className="section mt-6">
      <div className="columns">
        <div className="column">
      <Video/>
        </div>
        <div className="column">
          <h3 className="title is-4">Meet your teeth whitening specialist</h3>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title is-1">Brighten up with Alteza Smile</h1>
          </div>
        </div>
        <Difference />
      </div>
      <div className="container">
        <h1 className="title is-2 has-text-centered">Our Packages</h1>
        <Packages/>
      </div>
    </section>
  )
}

export default Content
