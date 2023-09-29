import React from 'react';
import MediaRender from '../footer/Media';


function Footer() {
  const mediaIcons = [
    {name: "Discord", url: "/chat"},
    {name: "Twitter", url: "/twitter"}
  ];

  return (
    <footer>
      <section className="media-container">
        <MediaRender media={mediaIcons}/>
      </section>

      <section className={`info-container`}>
        <h3>Kigen Games LLS</h3>
        <hr />
        <span>Kigen Games © 2023</span>
      </section>
    </footer>
  )
}

export default Footer;
