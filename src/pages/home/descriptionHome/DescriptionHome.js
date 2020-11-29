import React from 'react'
import './descriptionHome.css'
import imageHome from '../../../assets/gallery/home/imageHome.jpg'
import imageHome2 from '../../../assets/gallery/home/imageHome2.jpg'



const DescriptionHome = () => {
    return (
       <div>
    <div className="container-home">
        
         <div className="text-home">
                SHERRINGTON s'inspire des tendances actuelles et de la haute couture. En même temps,  elle propose des vêtements à la fois classiques, distingués voire même décontractés.<br/>
                 Ce style vestimentaire s'adresse par excellence aux hommes au gout raffiné, casual, classe et chic

                 La matière est celle qui donne le premier visage à nos vêtements. A la fois créatrice d'envie et de curiosité elle ne doit jamais laisser de marbre. <br/>Notre draperie comporte plusieurs références. Chacune d'entre elle correspond à un esprit bien particulier tout en respectant deux principes primordiaux : QUALITÉ et ÉLÉGANCE.
         </div>
         <div >
         <div className="text-gallery"><p className="collec">Collections Hiver 2020</p></div>

                <img className="image-home" src={imageHome} alt="Image Home" ></img>

         </div>
            
        
       </div>
       <div>
           <img className="image-home2" src={imageHome2} alt="Image Home" ></img>
       </div>
    </div>

    
    )
}


export default DescriptionHome