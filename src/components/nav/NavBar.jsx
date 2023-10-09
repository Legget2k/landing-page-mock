import Links from "./LinkContainer";
import Logo from "./logo.jsx";
import Hamb from "./Hamburguer";
import '../../styles/css/main.css';


function Navbar() {
  const links = [
      {name: "inicio", url: "/", description: "home description"},
      {name: "shop", url: "/shop", description: "home description"},
      {name: "forum", url: "/", description: "home description"},
      {name: "support", url: "/", description: "home description"}
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