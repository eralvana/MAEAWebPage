import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Cvu() {
  const value = useContext(Context);
  return (
    <section id="Cvu">
      <h1>CVU</h1>
      <ul>
        {
          value.cvu.map(function(e,i){
            return (
              <li key={i}>{e.grade} - {e.institution}. {e.period}. {e.director}.
              {
                e.pdf ? <> <a href={e.pdf} target="_blank" rel="noreferrer"><b>PDF</b></a>.</> : ""
              }
              </li>
            )
          }
        )
      }
      </ul>
    </section>
  );
}

export default Cvu;
