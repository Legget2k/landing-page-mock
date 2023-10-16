import React, { useState } from "react";


function LinkComponent({ links, closeMenu }) {
  /* State and events for descriptions */
  const [isHovered, setIsHovered] = useState(null);

  function handleLinkClick() {
    closeMenu();
  }

  function renderLinks(links) {
    return links.map((link, index) => (
      <li className="header__links-container-item" key={index}>
        <a href={link.url} className="header__links-container-link" onClick={handleLinkClick}>
          {link.name}
        </a>
      </li>
    ));
  }

  return <>{renderLinks(links)}</>;
}

export default LinkComponent;