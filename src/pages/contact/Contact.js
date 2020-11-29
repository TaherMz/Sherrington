import React from 'react'
import './contact.css'
import Map from './map'
import emailjs from 'emailjs-com'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



export default function Contact () {
  

   
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ocnkivk', 'template_2i3h7we',e.target,'user_60A7dmA2cELITagxdJmtJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }





    return (
    <div>
        <div>
            <div className="sous-titre">SERVICE CLIENTS - CONTACTEZ NOUS</div>

            <form className="form-container" onSubmit={sendEmail} noValidate autoComplete="off">
                    <div className="form-infos">

                    <div >
                    <TextField  id="filled-basic" label="Nom" variant="filled" name="name" />
                    </div><br/>
                    

                    <div>        
                    <TextField id="filled-basic" label="Prénom" variant="filled" name="lastname" />
                    </div><br/>


                    <div>
                    <TextField id="filled-basic" type="email" label="Adresse Email" variant="filled" name="email" />
                    </div><br/>


                    <div>
                    <TextField id="filled-basic" type="number" label="Téléphone" variant="filled" name="phone" />
                    </div><br/>


                    <div>        
                    <TextField id="filled-basic"  label="Sujet" variant="filled" name="subject" />
                    </div><br/>


                    </div>
                    <div className="form-message">
                    <TextField
                              id="filled-multiline-static"
                              label="Message"
                              multiline
                              rows={17}
                              variant="filled"
                              name="message"
                            /><br/>
                           
                        
                        <Button variant="contained" color="primary" type="submit">Envoyer</Button>

                    </div>
                    
            
            </form>



            <div className="sous-titre1">
                        Nos Magasins 
            </div>
            <div className="cordonnees">
                    <div className="noms">
                        <p>SHERINGTON El Menzah 7 </p>
                        <p>SHERINGTON Géant</p>
                        <p>SHERINGTON La Marsa</p>
                        <p>SHERINGTON Slim Centre (Sousse)</p>

                    </div>
                    <div className="nums">
                        <p>+216 28 44 06 01</p>
                        <p>+216 28 44 06 02</p>
                        <p>+216 28 44 06 06</p>
                        <p>+216 29 44 06 21</p>
                    </div>


 







            </div>
            </div>
            <div className="map">
            <Map />
            </div>

        </div>
    );
    }
  

