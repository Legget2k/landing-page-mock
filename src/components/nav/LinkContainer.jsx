import React from "react";
import LinkComponent from "./LinkComponent";

function LinkContainer({ closeMenu, links }) {
  return (
    <>
      <ul className="header__links-container">
        <LinkComponent links={links} closeMenu={closeMenu} />
      </ul>
    </>
  );
}

export default LinkContainer;