import React from 'react';

function Link() {

  const names = ["Home", "My Work", "Blog", "About Me"];

  return (
    <>
      <ul className='nav-bar'>
        { names.map( name => <li><a href={`../pages/${name}`}> {name} </a></li> ) } 
      </ul>
    </>
  )
}


export default Link;
