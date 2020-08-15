import React, { useEffect } from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Difference from "../components/difference"
import Packages from "../components/packages"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      <Content />
      <Hero />
      <Difference />
      <Packages />
    </Layout>
  )
}

export default IndexPage
