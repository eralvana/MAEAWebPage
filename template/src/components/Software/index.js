import Context from "../../context.js"
import { useContext } from 'react';

import "./styles.css"

function Software() {
  const value = useContext(Context);
  return (
    <section id="Software">
      <h1>Software</h1>
      <ul>
        {
          value.info.software.map(function(e,i){
            return (
              <li key={i}>In collaboration with {e.author}, we developing {e.name} module (written in Python) for {e.for}. ({e.year}) <a href={e.github} target="_blank" rel="noreferrer"><b>GitHub</b></a>, <a href={e.pipy} target="_blank" rel="noreferrer"><b>Pipy</b></a>, <a href={e.pdf} target="_blank" rel="noreferrer"><b>PDF</b></a>.</li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default Software;
