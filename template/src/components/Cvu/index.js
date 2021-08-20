import { useContext } from "react";
import Context from "../../context.js";

import { Box } from "@material-ui/core";

import "./styles.css";

function Cvu() {
  const value = useContext(Context);
  return (
    <Box textAlign="justify">
    <section id="Cvu">
      <h1>CVU</h1>
      <ul>
        {
          value.info.cvu.map(function(e,i){
            return (
              <li key={i}>{e.grade} - {e.institution}. {e.period}. {e.director}. <br/>
              {
                e.pdf ? <> <a href={e.pdf} target="_blank" rel="noreferrer"><b>PDF</b></a>.</> : ""
              }
              </li>
            )
          })
        }
      </ul>
    </section>
    </Box>
  );
}

export default Cvu;
