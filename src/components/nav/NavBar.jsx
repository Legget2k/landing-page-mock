import React, { useState, useEffect } from 'react';
import Links from "./Link";
import Logo from "./Logo";
import Hamb from "./Hamburguer";
import '../../styles/css/main.css';


function Navbar() {
  const [links, setLinks] = useState([]);
  const [areLinksRendered, setAreLinksRendered] = useState(false);

  useEffect(() => {
    const newData = [];
    /*the links should have 3 properties for rendering name: url: and description:*/
  
    setLinks(newData);
    setAreLinksRendered(newData.length > 0);
  }, []);

  return (
    <>
      <header style={{ justifyContent: areLinksRendered ? 'space-between' : 'center' }}>
        <Logo />
        <nav>
          {areLinksRendered && (
            <>
              <Hamb />
              <Links links={links} />
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;