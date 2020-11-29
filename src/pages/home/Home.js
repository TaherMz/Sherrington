import React from 'react'
import './home.css'
import VideoHome from './videoHome/VideoHome'
import DecriptionHome from './descriptionHome/DescriptionHome'
import GalleryHome from './galleryHome/GalleryHome'


const Home = () => {
    return (
        <div>
        <VideoHome/>

        <GalleryHome/>
        </div>
    )
}


export default Home