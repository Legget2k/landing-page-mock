import React from 'react';
import Links from "./Link";
import Logo from "./logo";
import Hamb from "./hamburguer";
import '../../styles/Layout.css';
function Navbar() {


  return (
    <>

      <header>
        
        <div>
          <Logo />
        </div>

        <nav>

          <Links />

          <Hamb />
        </nav>
      </header>

    </>
  );
}

export default Navbar
