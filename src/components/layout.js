import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="site">
      <Header />
      <div className="site-content"> {children}</div>
      <Footer />
    </div>
  )
}

export default Layout
