import React from 'react'
import logo from './img/logo portfolio.png'

const Navbar =() =>{
    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" id='' href="index.html#logo"><img src={logo}  className="logo" alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" id='Home' href="index.html#Navbar">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id='About' href="index.html#AboutMe">About me</a>
            </li>

          
            <li className="nav-item">
              <a className="nav-link" id='Services' href="index.html#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id='Experiences' href="index.html#experiences">Experiences</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" id='Contact' href="index.html#contact">Contact us</a>
            </li>
           
          </ul>

          
        
        </div>
        
      </nav>
           
    )
}

export default Navbar
