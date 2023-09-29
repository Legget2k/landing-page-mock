import React from 'react';
import { useState } from 'react';
import Description from './LinkDescription';


function LinkComponent( { links } ) {
  /*state and events for descriptions*/
  const [isHovered, setIsHovered] = useState(null);
  function handleMouseEnter(index) {
    setIsHovered(index);
  }
  function handleMouseLeave() {
    setIsHovered(null);
  }

  function renderLinks(links) {
    return links.map( (link, index /*link.id*/) => (
      <li
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <a href={link.url}>{link.name}
          <Description description={link.description} hover={isHovered === index} />
        </a>
      </li>
    ));
  }

  return <>{renderLinks(links)}</>;
}

export default LinkComponent;