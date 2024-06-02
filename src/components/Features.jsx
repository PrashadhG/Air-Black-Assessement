import React from 'react'
import camera from '../assets/camera.svg'
import heroStar from '../assets/hero-star.svg'
import group from '../assets/group-icon.svg'
import certificate from '../assets/certificate.png'
import '../styles/Features.css'


const Features = () => {
    return (
        <div className='features'>
            <div className='features-hero'>
                <div className='hero-header'>
                    <h2>Why Should You </h2>
                    <h2>Join Airblack ?</h2>
                </div>
                <div className='hero-elements'>
                    <div className='hero-icon-text'>
                        <img src={camera} alt="camera-icon" />
                        <div>
                            <p>Do-it-together </p>
                            <p>live on Zoom</p>
                        </div>
                    </div>
                    <div className='hero-icon-text'>
                        <img src={heroStar} alt="star-icon" />
                        <div>
                            <p>4.8/5 </p>
                            <p>Rated Classes</p>
                        </div>
                    </div>
                    <div className='hero-icon-text'>
                        <img src={group} alt="group-icon" />
                        <div>
                            <p>35000+ </p>
                            <p>Members</p>
                        </div>  
                    </div>
                </div>
                <div className='button-div'>
                    <button className='apply-button'>Apply Now</button>
                </div>
            </div>
            <div className='Certification'>
                <div className='certificate-h2'>
                    <span>Get Certified From India's Biggest</span>
                    <span> Beauty Platform</span>
                </div>
                <div>
                    <img src={certificate} alt="certificate" />
                </div>
            </div>
        </div>
    )
}

export default Features