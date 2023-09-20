import React from 'react'
import '../../styles/Layout.css';
function Navbar() {
  const names = ["Home", "My Work", "Blog", "About Me"];

  return (
  <>
  <header>
      <div>
        <h3>Logo</h3>
      </div>

      <nav>
        <ul>
          { names.map( name => <li><a href={`../pages/${name}`}> {name} </a></li> ) } 
        </ul>
                           
        <button>
          
        </button>
      </nav>
    </header>

  </>
  );
}

export default Navbar
