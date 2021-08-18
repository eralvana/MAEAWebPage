import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Teaching() {
  const value = useContext(Context);
  return (
    <section id="Teaching">
      <h1>Teaching</h1>
      <ul>
        {
          value.info.teaching.map(function(e,i){
            return (
              <li key={i}>{e.position}. {e.institution},  {e.placeanddate}.
              </li>
            )
          }
        )
      }
      </ul>
    </section>
  );
}

export default Teaching;
