import React from 'react';
import LinkComponent from './linkComponent';


const Link = ( linksFromNavBar ) => { //props
  return (
    <>
      <ul className='link-container'>
        <LinkComponent links={linksFromNavBar.links} />
      </ul>
    </>
  )
}

export default Link;