import React from 'react';
import {useState} from 'react';
import '../../styles/Layout.css';


function LinkComponent({ links }) {
  
  const [hoverIndex, setHoverIndex] = useState(null);

  function handleMouseEnter(){
    setHoverIndex(index);
  }

  function handleMouseLeave(){
    setHoverIndex(null);
  }

  function linksRender() {

    const rendering = links.map((link, index) => (

      <li key={index}>
        <a href={link.url} onMouseEnter={ () => handleMouseEnter(index) }
                          onMouseLeave={ handleMouseLeave }>
          {link.name}
          {hoverIndex === index && <span className='description'>{link.description}</span>}
        </a>
      </li>
    ));

    return rendering; 
  }

  return (
    <>
      {linksRender()}
    </>
  );
}

export default LinkComponent;