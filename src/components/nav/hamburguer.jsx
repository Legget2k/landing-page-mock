import React from 'react';
import '../../styles/Layout.css'
function hamburguer() {

  return (
    <>
      <input type="checkbox" id='check'/>
      <label htmlFor="check" className='checkBtn'>
        --- <br />
        --- <br />
        ---
      </label>

    </>
  )
}

export default hamburguer;
