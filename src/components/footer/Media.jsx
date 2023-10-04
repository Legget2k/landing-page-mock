import React from 'react'

function Media( medias ) {
      const mediasObj = medias.media;
  return (
    <>
    {mediasObj.map( (obj, index) => (
        <a href={obj.url} className="footer__media-link" key={index}>
          <span className="footer__media-text">
            <i className="footer__media-icon"> {obj.icon} </i>
             {obj.name}
          </span>
        </a>
        )
      )
    } 
    </>
  );
  }

export default Media;
