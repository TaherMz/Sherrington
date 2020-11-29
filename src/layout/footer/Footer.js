import React from 'react'
import './footer.css'
import logooSherrington from '../../assets/logos/sherringtonLogoo.png'
import logoFacebook from '../../assets/logos/facebookLogo.png'
import logoInsta from '../../assets/logos/instaLogo.png'
import logoYoutube from '../../assets/logos/youtubeLogo.png'

const Footer = () => {
    return (
        <footer>
                <div className='footer-top'>
                    <div >
                         <img className='footer-top-logo' src={logooSherrington} alt="Logo Sherrington" ></img>
                    </div>
                    <div >
                        <div className='suivez'>Suivez-nous sur  </div>
                        <a href="https://www.facebook.com/Sherrington.Tunisie/" target="_blank"><img className='footer-top-social-media' src={logoFacebook} alt="facebookLogo" ></img></a>
                       <a href="https://www.instagram.com/sherrington.tunisie/?hl=fr" target="_blank"> <img className='footer-top-social-media' src={logoInsta} alt="instaLogo"></img></a>
                       <a href="https://www.youtube.com/channel/UCFeWVAEUpny0BOjCL19qylg" target="_blank"> <img className='footer-top-social-media' src={logoYoutube} alt="youtubeLogo"></img></a>
                    </div>

                </div>
                <div className='footer-bottom'>
                    POWRED BY MOHAMED TAHER MZID 2020
                </div>
        </footer>
    )
}


export default Footer