import React from 'react';
import KigenLogo from '../../assets/kigenLogo-light.png';


function logo() {
  return (
    <div className='logo-container'>
      <a href="/">
        <img src={KigenLogo} alt="Logo" />
      </a>
    </div>
  )
}

export default logo;