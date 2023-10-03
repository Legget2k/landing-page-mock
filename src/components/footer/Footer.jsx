import React from 'react';
import MediaRender from '../footer/Media';


function Footer() {
  const mediaIcons = [
    {name: "Discord", url: "/chat"},
    {name: "Twitter", url: "/twitter"}
  ];

  return (
    <footer className='footer'>
      <section className="footer__media-container">
        <MediaRender media={mediaIcons}/>
      </section>

      <section className={`footer__info-container`}>
        <h3>Kigen Games LLS</h3>
        <hr />
        <span>Kigen Games © 2023</span>
      </section>
    </footer>
  )
}

export default Footer;
