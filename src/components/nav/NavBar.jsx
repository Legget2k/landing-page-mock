import Links from "./LinkContainer";
import Logo from "./logo.jsx";
import Hamb from "./Hamburguer";
import '../../styles/css/main.css';


function Navbar() {
  const links =
  [
      {name: "home", url: "#top", description: ""},
      {name: "about", url: "#about", description: "read about our team"},
    ];

  console.log(links);

  return (
    <>
      <header style={{ justifyContent: links ? 'space-between' : 'center' }} className='header'>

        <Logo className="header__logo"/>
        <nav className='header__nav'>
          {links && (
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