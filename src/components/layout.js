import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="section">
        <Header />
        <div className="container">
        {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout
