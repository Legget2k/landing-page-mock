import { useState } from "react";
import Links from "./LinkContainer";
import Logo from "./logo.jsx"; // Asume que tienes un componente Logo existente
import Hamb from "./Hamburguer";
import "../../styles/css/main.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { name: "home", url: "#top", description: "" },
    { name: "about", url: "#about", description: "read about our team" },
  ];

  return (
    <>
      <header
        style={{ justifyContent: links ? "space-between" : "center" }}
        className="header"
      >
        <Logo className="header__logo" />
        <nav className="header__nav">
          {links && (
            <>
              <Hamb isOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
              <Links links={links} closeMenu={closeMenu} />
            </>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;