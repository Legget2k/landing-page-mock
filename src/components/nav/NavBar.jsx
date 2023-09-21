import React from 'react';
import Links from "./Link";
import Logo from "./logo";
import Hamb from "./hamburguer";
import '../../styles/Layout.css';
function Navbar() {


  return (
    <>

      <header>
        
        <Logo />


        <nav>
          <Hamb />
          <Links />
        </nav>
      </header>

    </>
  );
}

export default Navbar
