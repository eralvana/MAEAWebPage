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
            let doc = "";
            if (e.pdf.length == 0){
              doc = ""
            } else {
              doc = '<a href={e.pdf} target="_blank" rel="noreferrer"><b>PDF</b></a>.'
            }
            return (
              <li key={i}>{e.grade} - {e.institution}. {e.period}. {e.director}. {doc}
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
