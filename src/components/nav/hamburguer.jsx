import React, { useState } from 'react';
import '../../styles/Layout.css';


function Hamburguer() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <input type="checkbox" id='check' checked={isOpen} onChange={toggleMenu} />
      <label htmlFor="check" className='checkBtn'>
        {isOpen ? (
          <>
            <div>&times;</div>
            <div>&times;</div>
            <div>&times;</div>
          </>
        ) : (
          <>
            <div>---</div>
            <div>---</div>
            <div>---</div>
          </>
        )}
      </label>
    </>
  );
}

export default Hamburguer;






