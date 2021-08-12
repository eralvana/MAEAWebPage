import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Nav() {
  const value = useContext(Context);
  return (
    <nav>
      <ul>
        <li>Papers</li>
        <li>Software</li>
        <li>Talks</li>
        <li>CVU</li>
        <li>Teaching</li>
      </ul>
    </nav>  );
}

export default Nav;
