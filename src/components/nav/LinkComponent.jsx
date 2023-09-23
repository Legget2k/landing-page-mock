import React from 'react';

function LinkComponent({ links }) {
      
  function linksRender() {

    const rendering = links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.name}</a>
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