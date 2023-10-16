import React, { useState } from "react";
import Description from "./LinkDescription";

function LinkComponent({ links, closeMenu }) {
  /* State and events for descriptions */
  const [isHovered, setIsHovered] = useState(null);

  function handleMouseEnter(index) {
    setIsHovered(index);
  }

  function handleMouseLeave() {
    setIsHovered(null);
  }

  function handleLinkClick() {
    closeMenu();
  }

  function renderLinks(links) {
    return links.map((link, index) => (
      <li
        className="header__links-container-item"
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={link.url}
          className="header__links-container-link"
          onClick={handleLinkClick}
        >
          {link.name}
        </a>
        <Description
          description={link.description}
          hover={isHovered === index}
        />
      </li>
    ));
  }

  return <>{renderLinks(links)}</>;
}

export default LinkComponent;