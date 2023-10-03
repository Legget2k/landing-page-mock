import React from 'react';
import LinkComponent from './linkComponent';


const Link = ( linksFromNavBar ) => { //props
  return (
    <>
      <ul className='header__link-container'>
        <LinkComponent links={linksFromNavBar.links} />
      </ul>
    </>
  )
}

export default Link;