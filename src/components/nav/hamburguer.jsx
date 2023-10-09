import React, { useState, useEffect } from 'react';

function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleResize() {
    if (window.innerWidth > 768) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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