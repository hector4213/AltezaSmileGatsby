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
      </nav>
    </header>
  )
}

export default Header
