import React from 'react'


function DescriptiveTextRender({data}) {
  return (
    <div className="main__descriptive-text">
      {data.url ? (
        <>
          <h3>{data.title}</h3>
          <p>{data.gameDescription}</p>
          <a href={data.url} target="_blank" className='main__descriptive-text--button button-49'>
            Click Aquí
          </a>
        </>
      ) : (
        <>
          <h3>{data.title}</h3>
          <p>{data.gameDescription}</p>
        </>
      )}
    </div>
  )
}

export default DescriptiveTextRender
