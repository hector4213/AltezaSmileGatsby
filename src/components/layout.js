import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="section">
        {children}
        </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
