import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Difference from '../components/difference';
import Packages from '../components/packages';


const IndexPage = () => {
  return (
    <Layout>
      <Content />
      <Difference/>
      <Packages/>
    </Layout>
  )
}

export default IndexPage
