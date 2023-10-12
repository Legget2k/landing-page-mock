import React from 'react'


function Media( medias ) {
      const mediasObj = medias.media;
  return (
    <>
    {mediasObj.map( (obj, index) => (
        <a href={obj.url} className="footer__media-link" key={index}>
          <i className="footer__media-icon"> {obj.icon} </i>
        </a>
        )
      )
    } 
    </>
  );
  }

export default Media;
