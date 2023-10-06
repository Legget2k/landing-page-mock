import React from 'react';
import MediaRender from '../footer/Media';
import DiscordIcon from '../../icons/Discord-icon.svg';
import TwitterIcon from '../../icons/Twitter-icon.svg';


function Footer() {
  const mediaIcons = [
    {name: "Discord", url: "/chat", icon: <img src={DiscordIcon.src} alt="Discord" />}, 
    {name: "Twitter", url: "/twitter", icon:  <img src={TwitterIcon.src} alt="Discord" />},
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
