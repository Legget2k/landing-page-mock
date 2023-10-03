import React, { useState, useEffect } from 'react';

function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // Function to drive the change in px based on viewport
  function handleResize() {
    // if viewport > 768px mobile menu will close automatically
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  }

  // effect to listen changes on viewport
  useEffect(() => {
    // adding a listener for the event resize
    window.addEventListener('resize', handleResize);

    // Clean event listener when unmounting component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <input type="checkbox" id="check" checked={isOpen} onChange={toggleMenu} />
      <label htmlFor="check" className={`header__checkBtn ${isOpen ? 'header__checkBtn--open' : ''}`}>
        <div className='header__checkBtn-animationBar'></div>
        <div className='header__checkBtn-animationBar'></div>
        <div className='header__checkBtn-animationBar'></div>
      </label>
    </>
  );
}

export default Hamburguer;