import React from 'react'


function DescriptiveTextRender({data}) {
  return (
    <>
      <div className="main__descriptive-text">
              {data.url ? (
                <>
                  <h3>{data.title}</h3>
                  <p>{data.gameDescription}</p>
                  <a href={data.url} target="_blank">
                    <span className='main__descriptive-text--button'>Click Aquí para visitar la página oficial</span>
                  </a>
                </>
              ) : (
                <>
                  <h3>{data.title}</h3>
                  <p>{data.gameDescription}</p>
                </>
              )}
            </div>
    </>
  )
}

export default DescriptiveTextRender
