import React from 'react'
import Typed from 'react-typed'
import shekil from './img/444.jpg'

const Header = () =>{
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development and website services</h1>
                <Typed
                className="typed-text"
                strings={[
                    'Cisco Networking Academy Certificate of Completion',
                    'IT Brains Academy Html, Css, JavaScript, React Js Certificate of Completion',
                    '']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                   
                </Typed>

                <a href={shekil} className="downloadcv" download>Download CV</a>
            </div>
            
        </div>
    )
}

export default Header
