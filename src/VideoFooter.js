import React from 'react'
import './VideoFooter.css'
import footerImage from './images/record.png'

function VideoFooter() {
    return (
        <div className="video__footer">
            <div className ="videoFooter__text">
                <h3>I am footer</h3>
                <p>this is description</p>
            </div>
            <img className="videoFooter_record" src={footerImage} />
        </div>
    )
}

export default VideoFooter
