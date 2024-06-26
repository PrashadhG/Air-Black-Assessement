import React from 'react';
import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/Linkedin.png';
import twitter from '../assets/images/twitter.png';
import footerBc from '../assets/images/footer-background.png';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-left'>
                <div className='footer-title'>
                    <h1>Join our growing community of</h1>
                    <h1>35,000+ alumni</h1>
                </div>
                <div className='social-media-icons'>
                    <img src={instagram} alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img src={linkedin} alt="linkedin" />
                    <img src={twitter} alt="twitter" />
                </div>
            </div>
            <div className='footer-background'>
                <img src={footerBc} alt="footerBc" />
            </div>
        </div>
    )
}

export default Footer