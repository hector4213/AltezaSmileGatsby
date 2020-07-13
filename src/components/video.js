import React from 'react'

import IntroVid from '../assets/intro.mp4'

const video = () => {
    return (
        <video controls>
            <source src={`${IntroVid}#t=3.6`} type="video/mp4"/>
        </video>
    )
}

export default video
