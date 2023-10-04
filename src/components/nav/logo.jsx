import React from 'react';
import KigenLogo from '../../assets/positivo logo.svg';


function logo() {
  return (
    <div className='header__logo-container'>
      <a href="/">
        <img src={KigenLogo.src} alt="Logo" />
      </a>
    </div>
  )
}

export default logo;