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
      <section className={`footer__info-container`}>
        <span>Kigen Games Studio, LLC @ 2023</span>
      </section>
      <section className="footer__media-container">
        <MediaRender media={mediaIcons}/>
      </section>

      
    </footer>
  )
}

export default Footer;
