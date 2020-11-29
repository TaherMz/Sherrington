import React from 'react'
import './videoHome.css'
import video from '../../../assets/videos/home/videoNouveautes.mp4'


const VideoHome = () => {
    return (
    <div>
        
        <video className="Video-home" autoPlay muted loop >
            <source src={video} type="video/mp4" />
             
        </video>
    </div>
    )
}


export default VideoHome