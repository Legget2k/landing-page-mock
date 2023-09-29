import React from 'react';
import Links from "./Link";
import Logo from "./Logo";
import Hamb from "./Hamburguer";
import '../../styles/css/main.css';


const links =[
  {name: "Home",      description: "Home Description",      url: "/",}, //id
  {name: "My Work",   description: "My Work Description",   url: "/work"}, 
  {name: "Blog",      description: "Blog Description",      url: "/blog"},
  {name: "About Me",  description: "About Me Description",  url: "/about"}
];
function Navbar() {
  return (
    <>
      <header>
        <Logo/>
        <nav>
          <Hamb/> 
          <Links links={links}/>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
