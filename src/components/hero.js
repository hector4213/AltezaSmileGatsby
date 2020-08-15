import React from "react"

const Hero = () => {
  return (
    <section className="hero is-primary" style={{ marginBottom: "200px" }}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">The Alteza Smile difference</h1>
          <h2 className="subtitle">Check out of Wall of Smiles</h2>
        </div>
      </div>
      <div
        className="fb-like"
        data-share="true"
        data-width="450"
        data-show-faces="true"
      ></div>
    </section>
  )
}

export default Hero
