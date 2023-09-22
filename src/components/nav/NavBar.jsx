import React from 'react';
import LinkCollection from "./LinkCollection";
import Logo from "./logo";
import Hamb from "./hamburguer";
import '../../styles/Layout.css';


function Navbar() {
  const links = [
    {"name": "Home", "description": "Home Description", "url": "/"},
    {"name": "My Work", "description": "My Work Description", "url": "/work"},
    {"name": "Blog", "description": "Blog Description", "url": "/blog"},
    {"name": "About Me", "description": "About Me Description", "url": "/about"}];

  return (
    <>
      <header>       
        <Logo />
        <nav>
          <Hamb />
          <LinkCollection linkList={links} />
        </nav>
      </header>
    </>
  );
}

export default Navbar
