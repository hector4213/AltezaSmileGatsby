import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="section main-container">
      <div className="main-content">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
