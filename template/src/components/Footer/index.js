import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Footer() {
  const value = useContext(Context);
  return (
    <footer>
      <ul>
        <li><a href={value.links.github} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={value.links.twitter} target="_blank" rel="noreferrer">Twitter</a></li>
        <li><a href={value.links.stackoverflow} target="_blank" rel="noreferrer">Stackoverflow</a></li>
        <li><a href={value.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
      <div>{value.name} &copy; 2021</div>
    </footer>
  );
}

export default Footer;
