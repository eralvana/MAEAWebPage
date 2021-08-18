import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Nav() {
  const value = useContext(Context);
  return (
    <nav>
      <ul>
          {
            value.states.map(function(element,index){
              return(
                <li key={index} onClick={()=>value.setDisplay(element)}>{element}</li>
              )
            })
          }
      </ul>
    </nav>  );
}

export default Nav;
