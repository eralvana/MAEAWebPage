import { useContext } from "react";
import Context from "../../context.js";

import { Link } from "react-router-dom";

import "./styles.css";

function Nav() {
  const value = useContext(Context);
  return (
    <nav>
      <ul>
          {
            value.states.map(function(element,index){
              return(
                <li key={index}><Link to={`/${element.name}`}>{element.name}</Link></li>
              )
            })
          }
      </ul>
    </nav>  );
}

export default Nav;
