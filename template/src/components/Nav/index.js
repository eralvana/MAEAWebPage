import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Nav() {
  const value = useContext(Context);
  return (
    <nav>
      <ul>
        <li onClick={()=>value.setDisplay("Papers")}>Papers</li>
        <li onClick={()=>value.setDisplay("Software")}>Software</li>
        <li onClick={()=>value.setDisplay("Talks")}>Talks</li>
        <li onClick={()=>value.setDisplay("Cvu")}>CVU</li>
        <li onClick={()=>value.setDisplay("Teaching")}>Teaching</li>
      </ul>
    </nav>  );
}

export default Nav;
