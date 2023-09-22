import React from 'react';

function format(l) {
  return <li><a href={`${l.url}`}> {l.name} </a></li>;
}

function LinkComponent({ linkList }) {  
  return (
    <>
      { linkList.map(l => format(l)) }
    </>
  )
}


export default LinkComponent
