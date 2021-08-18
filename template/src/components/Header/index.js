import Context from "../../context.js"
import { useContext } from 'react';

import Nav from "../Nav"

import "./styles.css"

function Header() {
  const value = useContext(Context);
  return (
    <header>
      <h1>{value.info.name}</h1>
      <Nav/>
    </header>
  );
}

export default Header;
