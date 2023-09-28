import React from 'react'
import MediaRender from '../footer/Media';

function Footer() {

  const mediaIcons = [
    {name: "Discord", url: "/chat"},
    {name: "Twitter", url: "/twitter"}
  ];

  return (
    <footer>
      <section className="media-containers">
        <Media media={mediaIcons}/>
      </section>
      <section className="info-Container">
        <hr />
        <h3>Kigen Games LL</h3>
        <span>© 2023  Kigen Games</span>
      </section>
    </footer>
  )
}

export default Footer
