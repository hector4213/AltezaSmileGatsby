import React from 'react';
import footerStyles from './footer.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.container}>
            Created by: Hector C <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faFacebook}/>
            </div>
        </footer>
    )
}

export default Footer;