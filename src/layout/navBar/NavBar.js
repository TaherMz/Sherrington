import React from 'react';
import './navBar.css'
import logoSherrington from '../../assets/logos/sherringtonLogo.png'
import {Link} from 'react-router-dom'



const NavBar = () => {
    
    return ( 
      <header className='header'>
            <div className="logo-container">
            <Link to="/" >  <img src={logoSherrington} className="logo-header" alt="LogoSherrington"/></Link>
            </div>
            <div className="menu-container">
                   <Link to="/" className="menu-link">Acceuil</Link> 
                   <Link to="/Products" className="menu-link">Nos Produits</Link> 
                   <Link to="/Sponsors" className="menu-link">Nos Partenaires</Link> 
                   <Link to="/Contact" className="menu-link">Contact</Link>   
            </div>

      </header>
    
    );
  }


export default NavBar