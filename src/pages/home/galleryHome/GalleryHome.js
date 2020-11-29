import React, {Component} from 'react'

import './galleryHome.css'
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import imageCollec from '../../../assets/gallery/home/imageCollec.png'
import imageEst from '../../../assets/gallery/home/imageEst.png'
import imageTun from '../../../assets/gallery/home/ImageTun.png'




export class videoModal extends Component  {
  constructor(){
    super();
    this.state=
    {
      isOpen:false,
    };
  
  this.openModal= this.openModal.bind(this);
}

openModal() {
  this.setState({isOpen:true});
}

 render() { 

    return (

<div>
<h1 className="gal-text">SHERRIGTON GALLERY</h1>

        <div className="container-gallery">
      
        <div className="Gall">
        <div>
          <p className="label-gall">Collection 2020</p>
        </div>
        
                    <div className="gal1">
                    
                        <ModalVideo 
                              channel="youtube"
                              isOpen={this.state.isOpen}
                              videoId="BVRN04eQS5c"
                              onClose={()=>this.setState({isOpen:false})}/>

                              <img className="image-gal" src={imageCollec} alt="Image Home" onClick={this.openModal}></img>


                      </div>

          </div>
          <div className="Gall">
        <div>
          <p className="label-gall">Spot Espérence</p>
        </div>
        

                  <div className="gal1">
                    <ModalVideo 
                          channel="youtube"
                          isOpen={this.state.isOpen}
                          videoId="ROXSdESS680"
                          onClose={()=>this.setState({isOpen:false})}/>

                          <img className="image-gal" src={imageEst} alt="Image Home" onClick={this.openModal}></img>


                  </div>
    </div>

            <div className="Gall">
                                  <div>
                                    <p className="label-gall">Spot Equipe National</p>
                                  </div>
        

                      <div className="gal1">
                        <ModalVideo 
                              channel="youtube"
                              isOpen={this.state.isOpen}
                              videoId="VJE3WGS9aoI"
                              onClose={()=>this.setState({isOpen:false})}/>

                              <img className="image-gal" src={imageTun} alt="Image Home" onClick={this.openModal}></img>


                      </div>
                      </div>






         </div>




</div>

    )
}
}


export default videoModal;