import React from 'react';
import LinkComponent from './linkComponent';


const Link = ( linksFromNavBar ) => {
  return (
    <>
      <ul className='header__links-container'>
        <LinkComponent links={linksFromNavBar.links} />
      </ul>
    </>
  )
}

export default Link;