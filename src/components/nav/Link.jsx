import React from 'react'
import LinkComponent from './linkComponent';
import '../../styles/Layout.css'


const Link = (linksFromNavBar) => {

  return (
    <>
      <ul className='link-container'>
        <LinkComponent links={linksFromNavBar.links} />
      </ul>
    </>
  )
}

export default Link;