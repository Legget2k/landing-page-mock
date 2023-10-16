import React, { useEffect } from 'react';


function Hamburguer({ isOpen, toggleMenu, closeMenu }) {
  function handleResize() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [closeMenu]);

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
