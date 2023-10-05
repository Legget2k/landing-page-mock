import React from 'react'

function DescriptiveTextRender({data}) {
  return (
    <>
      <div className="main__descriptive-text">
              {data.url ? (
                <>
                  <a href={data.url}>
                    <h2>{data.title}</h2>
                  </a>
                  <p>{data.gameDescription}</p>
                  <span>Click <a href={data.url}>Aquí</a> para visitar la página oficial</span>
                </>
              ) : (
                <>
                  <h2>{data.title}</h2>
                  <p>{data.gameDescription}</p>
                </>
              )}
            </div>
    </>
  )
}

export default DescriptiveTextRender
