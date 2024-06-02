import React from 'react';
import headerImage from '../assets/images/header-image.png';
import logo from '../assets/images/logo.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-background'>
        <img src={headerImage} alt='Header Image' className='header-image' />
      </div>
      <div className='header-logo'>
        <img src={logo} alt="Logo" width="200" height="200"/>
        <p>PRESENTS</p>
      </div>
    </div>
  );
};

export default Header;
