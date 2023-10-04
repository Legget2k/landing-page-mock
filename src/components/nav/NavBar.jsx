import React, { useState, useEffect } from 'react';
import Links from "./LinkContainer";
import Logo from "./Logo";
import Hamb from "./Hamburguer";
import '../../styles/css/main.css';


function Navbar() {
  const [links, setLinks] = useState([]);
  const [areLinksRendered, setAreLinksRendered] = useState(false);

  useEffect(() => {
    const newData = [
      {name: "inicio", url: "/", description: "home description"},
      {name: "shop", url: "/shop", description: "home description"},
      {name: "forum", url: "/", description: "home description"},
      {name: "support", url: "/", description: "home description"}
    ];
    /*the links should have 3 properties for rendering name: url: and description:*/
  
    setLinks(newData);
    setAreLinksRendered(newData.length > 0);
  }, []);

  return (
    <>
      <header style={{ justifyContent: areLinksRendered ? 'space-between' : 'center' }} className='header'>

        <Logo className="header__logo"/>
        <nav className='header__nav'>
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