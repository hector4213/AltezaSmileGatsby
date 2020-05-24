import React from "react"
import logo from "../images/logo.svg"
import headerStyles from "./header.module.scss"


const Header = () => {

  

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.nav}>
        <img src={logo} alt="logo" className={headerStyles.logo} />
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>Book</li>
          <li className={headerStyles.navItem}>FAQS</li>
          <li className={headerStyles.navItem}>About Us</li>
        </ul>
        <div className={headerStyles.burger}>
          <div className={headerStyles.line1}></div>
          <div className={headerStyles.line2}></div>
          <div className={headerStyles.line3}></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
