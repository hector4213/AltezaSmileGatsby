import React from 'react'

import IntroVid from '../assets/intro.mp4'

const video = () => {
    return (
        <video controls autoplay="" muted>
            <source src={`${IntroVid}#t=3.0`} type="video/mp4"/>
        </video>
    )
}

export default video
