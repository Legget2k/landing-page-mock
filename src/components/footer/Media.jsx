import React from 'react'

function Media( medias ) {
      const mediasObj = medias.media;
  return (
    mediasObj.map((obj, index) => (
      <a href={obj.url} key={index}>
        <span>
          <i>iconSVG</i> {obj.name}
        </span>
      </a>
    )
  ) );
}

export default Media
