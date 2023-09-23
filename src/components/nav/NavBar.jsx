import React from 'react';
import { useState } from 'react';
import Links from "./Link";
import Logo from "./Logo";
import Hamb from "./Hamburguer";
import '../../styles/Layout.css';


function Navbar() {
  const [links, setLinks] = useState([
    {name: "Home", description: "Home Description", url: "/"},
    {name: "My Work", description: "My Work Description", url: "/work"},
    {name: "Blog", description: "Blog Description", url: "/blog"},
    {name: "About Me", description: "About Me Description", url: "/about"}
  ]);

  return (
    <>

      <header>
        
        <Logo />


        <nav>
          <Hamb />

          <Links links={links}/>
        </nav>
      </header>

    </>
  );
}

export default Navbar
