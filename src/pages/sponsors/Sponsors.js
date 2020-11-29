import React from 'react'
import './sponsors.css'
import sponsorsImage from '../../assets/gallery/sponsors/sponsor.jpg'
import sponsorResponsive from '../../assets/gallery/sponsors/sponsorResponsive.jpg'

const Sponsors = () => {
    return (
    <div className="image-sponsor">
  
        <img  src={sponsorsImage} alt="Sponsors"  className="normal"></img>

        <img  src={sponsorResponsive} alt="Sponsors" className="respons"></img>
    </div>
    )
}


export default Sponsors